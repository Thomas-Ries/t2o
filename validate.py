#!/usr/bin/env python3
# Validation des sources : ESM node --check sur les .js et les <script setup>,
# équilibre des balises des templates, guillemets dans les attributs.
import re, subprocess, sys, pathlib

ROOT = pathlib.Path("/home/user/t2o")
VOID = {"input", "img", "br", "hr", "path", "use", "circle", "line", "rect", "stop", "source", "meta", "link"}
fails = []

def check_esm(src, name):
    r = subprocess.run(["node", "--check", "--input-type=module"],
                       input=src.encode(), capture_output=True)
    if r.returncode != 0:
        fails.append(f"{name} : syntaxe ESM invalide\n{r.stderr.decode()[:600]}")

def check_template(tpl, name):
    stack = []
    for m in re.finditer(r"<(/?)([a-zA-Z][a-zA-Z0-9-]*)((?:\s+[^\s\"'<>=/]+(?:=(?:\"[^\"]*\"|'[^']*'|[^\s\"'>]+))?)*)\s*(/?)>", tpl):
        close, tag, attrs, selfclose = m.group(1), m.group(2), m.group(3), m.group(4)
        if tag.lower() in VOID or selfclose:
            continue
        if close:
            if not stack or stack[-1] != tag:
                fails.append(f"{name} : balise fermante </{tag}> inattendue (pile : {stack[-6:]})")
                return
            stack.pop()
        else:
            stack.append(tag)
    if stack:
        fails.append(f"{name} : balises non fermées : {stack}")
    # attributs : guillemets doubles imbriqués interdits
    for m in re.finditer(r"[a-zA-Z-]+=(\"[^\"]*\")", tpl):
        if '"' in m.group(1)[1:-1]:
            fails.append(f"{name} : guillemet imbriqué dans un attribut : {m.group(0)[:120]}")

for p in sorted(ROOT.rglob("*.js")):
    if "node_modules" in str(p):
        continue
    check_esm(p.read_text(), str(p))

for p in sorted(ROOT.rglob("*.vue")):
    src = p.read_text()
    m = re.search(r"<script setup>(.*?)</script>", src, re.S)
    if m:
        check_esm(m.group(1), f"{p} (script setup)")
    else:
        fails.append(f"{p} : pas de <script setup>")
    for m in re.finditer(r"<template(?:\s[^>]*)?>(.*?)</template>", src, re.S):
        check_template(m.group(1), f"{p} (template)")

if fails:
    print("ÉCHECS :")
    for f in fails:
        print(" -", f)
    sys.exit(1)
print("OK : tous les fichiers passent la validation.")

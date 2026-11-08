// T2O Bâtiment — worker Cloudflare Pages (Direct Upload).
// POST /api/contact : valide le formulaire et envoie un e-mail via Resend.
// Aucune donnée n'est stockée. Fin obligatoire : env.ASSETS.fetch(request).

const ALLOWED_SPECS = [
  "Plâtrerie", "Sanitaire", "Électricité", "Isolation", "Carrelage", "Peinture",
  "Autre / plusieurs spécialités",
];

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type",
    },
  });
}

function clean(value, max) {
  // Anti-injection : retire tout caractère de contrôle (retours ligne, nul…)
  // avant tout usage — impossible de falsifier les en-têtes ou le corps.
  return String(value || "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

// Un e-mail d'en-tête doit être d'une propreté absolue : pas de retours
// ligne (injection d'en-têtes), structure locale@domaine minimale.
function safeEmail(value) {
  const v = String(value || "").trim();
  if (!v) return "";
  if (/[\r\n\u0000-\u001f]/.test(v)) return "";
  if (!/^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/.test(v)) return "";
  return v.slice(0, 120);
}

async function sendEmail(env, d) {
  const to = env.CONTACT_EMAIL || "t2obatiment@gmail.com";
  const subject = `[t2o-batiment.fr] Prise de contact — ${d.specialite} (${d.localite})`;
  const body = [
    "Nouvelle demande depuis le site T2O Bâtiment :",
    "",
    `Nom         : ${d.nom}`,
    `Téléphone   : ${d.tel}`,
    `Localité    : ${d.localite}`,
    `Spécialité  : ${d.specialite}`,
    "",
    "Message :",
    d.message,
    "",
    "— Envoyé via le formulaire du site. Aucune donnée conservée.",
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: env.MAIL_FROM || "T2O Bâtiment <onboarding@resend.dev>",
      to: [to],
      reply_to: d.email || undefined,
      subject,
      text: body,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`resend ${res.status}: ${detail.slice(0, 300)}`);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") return json({ ok: true });

    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const d = await request.json();

        // Honeypot anti-spam : un robot remplit le champ caché.
        if (clean(d.site, 200)) return json({ ok: true });

        const data = {
          nom: clean(d.nom, 80),
          tel: clean(d.tel, 30),
          email: safeEmail(d.email),
          localite: clean(d.localite, 100),
          specialite: clean(d.specialite, 60),
          message: clean(d.message, 3000),
        };

        if (!data.nom || !data.tel || !data.localite || !data.message) {
          return json({ ok: false, error: "champs manquants" }, 400);
        }
        // Téléphone : exactement 10 chiffres (numéro français).
        if (!/^0\d{9}$/.test(data.tel.replace(/\s/g, ""))) {
          return json({ ok: false, error: "téléphone invalide" }, 400);
        }
        data.tel = data.tel.replace(/\s/g, "");
        // Le nom et la localité sont du texte simple : pas de chevrons ni de
        // caractères exotiques (aucun HTML n'est généré depuis ces champs,
        // mais on n'accepte pas non plus les tentatives d'injection).
        for (const f of [data.nom, data.localite]) {
          if (/[<>{}\\]/.test(f)) return json({ ok: false, error: "caractères non autorisés" }, 400);
        }
        if (data.specialite && !ALLOWED_SPECS.includes(data.specialite)) {
          data.specialite = "Autre / plusieurs spécialités";
        }

        if (!env.RESEND_API_KEY) {
          console.error("RESEND_API_KEY absente : configurer la variable Cloudflare.");
          return json({ ok: false, error: "configuration manquante" }, 500);
        }

        await sendEmail(env, data);
        return json({ ok: true });
      } catch (err) {
        console.error("contact error:", err);
        return json({ ok: false, error: "envoi impossible" }, 500);
      }
    }

    return env.ASSETS.fetch(request);
  },
};

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { SPECS } from "../data/site";

const route = useRoute();
const menuOpen = ref(false);
const specOpen = ref(false);

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false;
    specOpen.value = false;
  }
);

const isActive = (slug) => route.params.slug === slug;
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-40 bg-white/95 backdrop-blur border-b border-hairline">
    <div class="mx-auto max-w-6xl px-5 sm:px-6 flex h-17 items-center justify-between">
      <router-link to="/" class="flex items-center gap-2.5 font-extrabold text-brand-950">
        <span
          class="w-9.5 h-9.5 rounded-[10px] bg-gradient-to-br from-brand-600 to-brand-950 grid place-items-center text-[11px] font-extrabold text-white"
          >T2O</span
        >
        <span class="text-lg tracking-wide">T2O <span class="text-brand-600">Bâtiment</span></span>
      </router-link>

      <!-- Nav desktop -->
      <nav class="hidden md:block">
        <ul class="flex items-center gap-1">
          <li>
            <router-link
              to="/"
              class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-soft"
              exact-active-class="text-brand-600 bg-brand-soft"
            >
              Accueil
            </router-link>
          </li>
          <li class="relative">
            <button
              class="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-soft"
              :class="{ 'text-brand-600 bg-brand-soft': route.name === 'spec' }"
              @click="specOpen = !specOpen"
            >
              Nos corps de métier
              <span class="text-[10px] text-muted transition-transform" :class="{ 'rotate-180': specOpen }">▼</span>
            </button>
            <ul
              v-if="specOpen"
              class="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 bg-white border border-hairline rounded-xl shadow-lg p-2 min-w-52 grid"
            >
              <li v-for="s in SPECS" :key="s.slug">
                <router-link
                  :to="`/specialites/${s.slug}`"
                  class="block px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-soft whitespace-nowrap"
                  :class="{ 'text-brand-600 bg-brand-soft': isActive(s.slug) }"
                >
                  {{ s.title }}
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link
              to="/#contact"
              class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-soft"
            >
              Contact
            </router-link>
          </li>
          <li>
            <router-link to="/mentions-legales" class="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-soft">
              Mentions légales
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Burger mobile -->
      <button class="md:hidden p-2" aria-label="Menu" @click="menuOpen = !menuOpen">
        <svg class="w-6.5 h-6.5 text-brand-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path v-if="!menuOpen" d="M4 7h16M4 12h16M4 17h16" />
          <path v-else d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <!-- Menu mobile -->
    <nav v-if="menuOpen" class="md:hidden border-t border-hairline bg-white px-5 pt-3 pb-5">
      <router-link to="/" class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-soft">Accueil</router-link>
      <p class="px-3 pt-3 pb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Nos corps de métier</p>
      <router-link
        v-for="s in SPECS"
        :key="s.slug"
        :to="`/specialites/${s.slug}`"
        class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-soft"
      >
        {{ s.title }}
      </router-link>
      <p class="px-3 pt-3 pb-1 text-[11px] font-bold uppercase tracking-widest text-muted">Informations</p>
      <router-link to="/#contact" class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-soft">Contact</router-link>
      <router-link to="/mentions-legales" class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-soft">Mentions légales</router-link>
      <router-link to="/politique-confidentialite" class="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-soft">Politique de confidentialité</router-link>
    </nav>
  </header>
</template>
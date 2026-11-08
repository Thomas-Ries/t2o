<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { SPECS, CONTACT } from "../data/site";

const pick = ref("");
const router = useRouter();
const onChange = () => {
  if (pick.value) {
    router.push("/specialites/" + pick.value);
    pick.value = "";
  }
};
</script>

<template>
  <footer class="bg-brand-950 text-[#b9cbe8] pt-14">
    <div class="mx-auto max-w-6xl px-5 sm:px-6 grid gap-8 pb-10 md:grid-cols-3">
      <div>
        <router-link to="/" class="flex items-center gap-2.5 font-extrabold text-white mb-4">
          <span
            class="w-9.5 h-9.5 rounded-[10px] bg-gradient-to-br from-brand-600 to-brand-950 ring-1 ring-white/20 grid place-items-center text-[11px] font-extrabold text-white"
            >T2O</span
          >
          <span class="text-lg">T2O <span class="text-brand-300">Bâtiment</span></span>
        </router-link>
        <p class="text-sm max-w-72">
          Artisan du second œuvre : plâtrerie, sanitaire, électricité, isolation, carrelage et peinture.
          Un interlocuteur unique pour tous vos travaux d'intérieur.
        </p>
        <p class="text-sm mt-4">📍 Zone d'intervention : {{ CONTACT.zone }}</p>
      </div>

      <div>
        <h4 class="text-white font-bold mb-3.5 text-[15px]">Nos spécialités</h4>
        <select
          v-model="pick"
          class="w-full rounded-[10px] bg-white/10 border border-white/25 px-3.5 py-2.5 text-sm text-[#cddaf0] outline-none cursor-pointer hover:border-white/50"
          @change="onChange"
        >
          <option value="" disabled>Choisir une spécialité…</option>
          <option v-for="s in SPECS" :key="s.slug" :value="s.slug">{{ s.title }}</option>
        </select>
      </div>

      <div>
        <h4 class="text-white font-bold mb-3.5 text-[15px]">Navigation</h4>
        <ul class="grid gap-2 text-sm">
          <li><router-link to="/" class="hover:text-white">Accueil</router-link></li>
          <li><router-link to="/#contact" class="hover:text-white">Contact</router-link></li>
          <li><router-link to="/mentions-legales" class="hover:text-white">Mentions légales</router-link></li>
          <li><router-link to="/politique-confidentialite" class="hover:text-white">Politique de confidentialité</router-link></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10 py-4">
      <div class="mx-auto max-w-6xl px-5 sm:px-6 flex flex-wrap gap-2 justify-between text-[13px]">
        <span>© 2026 T2O Bâtiment — Tous droits réservés.</span>
        <span class="flex gap-4">
          <router-link to="/mentions-legales" class="hover:text-white">Mentions légales</router-link>
          <router-link to="/politique-confidentialite" class="hover:text-white">Politique de confidentialité</router-link>
        </span>
      </div>
    </div>
  </footer>
</template>

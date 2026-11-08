<script setup>
import { ref, computed } from "vue";
import { SPECS } from "../data/site";

const props = defineProps({
  preset: { type: String, default: "" },
  presetLocalite: { type: String, default: "" },
});

const form = ref({
  nom: "",
  tel: "",
  specialite: props.preset,
  localite: props.presetLocalite,
  message: "",
  site: "", // honeypot anti-spam (invisible)
});
const sent = ref(false);
const error = ref("");
const busy = ref(false);
const autosize = (e) => {
  const el = e.target;
  el.style.height = "auto";
  el.style.height = Math.min(el.scrollHeight + 2, 320) + "px";
};

// Téléphone : uniquement les chiffres, 10 max (numéro français).
const onTel = () => {
  form.value.tel = form.value.tel.replace(/[^\d]/g, "").slice(0, 10);
};

const telValide = computed(() => /^0\d{9}$/.test(form.value.tel));

async function submit() {
  error.value = "";
  if (!telValide.value) {
    error.value = "Numéro invalide : 10 chiffres attendus (ex. 0627370651).";
    return;
  }
  busy.value = true;
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form.value),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) throw new Error(data.error || "erreur");
    sent.value = true;
  } catch (e) {
    error.value = "L'envoi a échoué — réessayez dans un instant ou appelez-nous directement.";
  } finally {
    busy.value = false;
  }
}
</script>

<template>
  <div class="rounded-2xl bg-gradient-to-r from-brand-950 to-brand-800 text-white p-8 sm:p-12 flex flex-wrap gap-7 items-center justify-between">
    <div class="flex-1 min-w-64">
      <h2 class="text-2xl font-extrabold mb-2">Contactez-nous</h2>
      <p class="text-[#cddaf0]">Réponse sous 24 h. Décrivez votre projet en quelques lignes, nous vous recontactons rapidement.</p>
      <p class="mt-4 text-sm text-[#b9cbe8]">📍 Zone d'intervention : Alsace</p>
    </div>

    <div class="flex-[1.3] min-w-70">
      <div v-if="sent" class="text-center py-10">
        <span class="text-4xl">✅</span>
        <b class="block text-lg mt-2">Demande envoyée&nbsp;!</b>
        <p class="text-[#cddaf0] text-sm mt-1.5">Merci, nous vous recontactons sous 24 h.</p>
      </div>

      <form v-else class="grid grid-cols-1 sm:grid-cols-2 gap-3.5" novalidate @submit.prevent="submit">
        <label class="block">
          <span class="block text-[13px] font-semibold text-[#dbe6f7] mb-1.5">Nom <span class="text-brand-300">*</span></span>
          <input
            v-model.trim="form.nom"
            required
            maxlength="80"
            type="text"
            placeholder="Votre nom"
            class="w-full rounded-[10px] bg-white/[.12] border border-white/30 px-3.5 py-2.5 text-white outline-none placeholder:text-[#8fa8cc] focus:border-brand-300 focus:bg-white/[.18]"
          />
        </label>
        <label class="block">
          <span class="block text-[13px] font-semibold text-[#dbe6f7] mb-1.5">Téléphone <span class="text-brand-300">*</span></span>
          <input
            v-model="form.tel"
            @input="onTel"
            required
            maxlength="10"
            inputmode="numeric"
            autocomplete="tel"
            type="text"
            placeholder="06 12 34 56 78"
            class="w-full rounded-[10px] bg-white/[.12] border border-white/30 px-3.5 py-2.5 text-white outline-none placeholder:text-[#8fa8cc] focus:border-brand-300 focus:bg-white/[.18]"
          />
        </label>
        <label class="block sm:col-span-2">
          <span class="block text-[13px] font-semibold text-[#dbe6f7] mb-1.5">Spécialité concernée</span>
          <select
            v-model="form.specialite"
            class="w-full rounded-[10px] bg-white/[.12] border border-white/30 px-3.5 py-2.5 text-white outline-none focus:border-brand-300"
          >
            <option value="">— Choisir une spécialité —</option>
            <option v-for="s in SPECS" :key="s.slug" :value="s.title">{{ s.title }}</option>
            <option value="Autre / plusieurs spécialités">Autre / plusieurs spécialités</option>
          </select>
        </label>
        <label class="block sm:col-span-2">
          <span class="block text-[13px] font-semibold text-[#dbe6f7] mb-1.5">Localité du projet <span class="text-brand-300">*</span></span>
          <input
            v-model.trim="form.localite"
            required
            maxlength="100"
            type="text"
            placeholder="Ville / commune (Alsace)"
            class="w-full rounded-[10px] bg-white/[.12] border border-white/30 px-3.5 py-2.5 text-white outline-none placeholder:text-[#8fa8cc] focus:border-brand-300 focus:bg-white/[.18]"
          />
        </label>
        <label class="block sm:col-span-2">
          <span class="block text-[13px] font-semibold text-[#dbe6f7] mb-1.5">Décrivez votre projet <span class="text-brand-300">*</span></span>
          <textarea
            v-model.trim="form.message"
            required
            maxlength="3000"
            rows="3"
            placeholder="Ex. : rénovation d'une salle de bain de 5 m²…"
            class="w-full resize-y min-h-22 rounded-[10px] bg-white/[.12] border border-white/30 px-3.5 py-2.5 text-white outline-none placeholder:text-[#8fa8cc] focus:border-brand-300 focus:bg-white/[.18]"
            @input="autosize"
          />
        </label>

        <!-- Honeypot invisible -->
        <input v-model="form.site" name="site" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />

        <p class="sm:col-span-2 text-[12.5px] text-[#b9cbe8]">
          En soumettant ce formulaire, vous acceptez que ces informations soient utilisées uniquement pour répondre à votre
          demande. Elles ne sont ni stockées ni transmises à des tiers.
          <router-link to="/politique-confidentialite" class="underline text-[#cddaf0]">Politique de confidentialité</router-link>.
        </p>

        <p v-if="error" class="sm:col-span-2 text-[13px] text-red-300">{{ error }}</p>

        <div class="sm:col-span-2">
          <button
            type="submit"
            :disabled="busy"
            class="w-full justify-center rounded-full bg-brand-600 px-5 py-3.5 font-semibold text-white hover:-translate-y-px hover:shadow-lg transition disabled:opacity-60"
          >
            {{ busy ? "Envoi…" : "Envoyer ma demande" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import { SPECS, specBySlug } from "../data/site";
import SectionHead from "../components/SectionHead.vue";
import ContactSection from "../components/ContactSection.vue";

const route = useRoute();
const spec = computed(() => specBySlug(route.params.slug));
const others = computed(() => SPECS.filter((s) => s.slug !== route.params.slug));

// Pré-sélectionne la spécialité du formulaire.
watch(
  spec,
  (s) => s && (document.title = `${s.title} — T2O Bâtiment`),
  { immediate: true }
);
</script>

<template>
  <div v-if="spec">
    <!-- Hero spécialité -->
    <section class="relative bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 text-white overflow-hidden">
      <div class="hero-glow absolute inset-0 pointer-events-none" />
      <div class="relative mx-auto max-w-6xl px-5 sm:px-6 py-16 sm:py-18 max-w-3xl">
        <span class="inline-flex text-[12px] font-semibold uppercase tracking-widest bg-white/12 border border-white/25 px-3.5 py-1.5 rounded-full mb-5">
          {{ spec.badge }}
        </span>
        <h1 class="text-3xl sm:text-[2.9rem] font-extrabold leading-[1.12] mb-4.5">
          {{ spec.title }} <span class="text-brand-300">— T2O Bâtiment</span>
        </h1>
        <p class="text-lg text-[#cddaf0] mb-7 max-w-xl">{{ spec.lead }}</p>
        <router-link
          to="/#contact"
          class="rounded-full bg-brand-600 px-5 py-3 font-semibold text-white hover:-translate-y-px hover:shadow-lg transition"
        >
          Contactez-nous
        </router-link>
      </div>
    </section>

    <!-- Prestations -->
    <section class="py-16 sm:py-18">
      <div class="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHead kicker="Nos prestations" title="Ce que nous réalisons" />
        <div class="grid gap-5 md:grid-cols-2">
          <div v-for="it in spec.items" :key="it[0]" v-reveal class="bg-white border border-hairline rounded-xl p-5.5 flex gap-4">
            <span class="shrink-0 w-11 h-11 rounded-[10px] bg-brand-soft grid place-items-center">
              <svg class="w-5.5 h-5.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </span>
            <div>
              <h3 class="font-bold mb-1">{{ it[0] }}</h3>
              <p class="text-sm text-muted">{{ it[1] }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Galerie -->
    <section class="py-16 sm:py-18 bg-soft">
      <div class="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHead kicker="Réalisations" title="Quelques exemples de chantiers" sub="Photos d'illustration — remplacées par de vraies photos de chantiers." />
        <div v-reveal class="grid gap-4 sm:grid-cols-3">
          <div v-for="(g, i) in spec.gallery" :key="i" class="relative rounded-xl overflow-hidden aspect-[4/3] bg-brand-950 shadow-md">
            <img :src="g" :alt="`Chantier ${spec.title} ${i + 1}`" class="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="py-16 sm:py-18">
      <div class="mx-auto max-w-6xl px-5 sm:px-6">
        <ContactSection :preset="spec.title" />
      </div>
    </section>

    <!-- Autres spécialités -->
    <section class="pb-16 sm:pb-18">
      <div class="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHead kicker="Nos autres corps de métier" title="Un seul artisan, tous les corps de métier" />
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <router-link
            v-for="o in others"
            :key="o.slug"
            :to="`/specialites/${o.slug}`"
            v-reveal
            class="flex items-center gap-4 bg-white border border-hairline rounded-xl p-5.5 hover:shadow-lg transition"
          >
            <span class="shrink-0 w-11 h-11 rounded-[10px] bg-gradient-to-br from-brand-600 to-brand-950 grid place-items-center">
              <svg class="w-5.5 h-5.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </span>
            <div>
              <h3 class="font-bold">{{ o.title }}</h3>
              <p class="text-sm text-muted">{{ o.badge }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { computed, watch } from "vue";
import { SPECS, CITIES, cityBySlug } from "../data/site";
import SectionHead from "../components/SectionHead.vue";
import ContactSection from "../components/ContactSection.vue";

const props = defineProps({ citySlug: { type: String, required: true } });
const city = computed(() => cityBySlug(props.citySlug));
const autres = computed(() => CITIES.filter((c) => c.slug !== props.citySlug));

watch(
  city,
  (c) => c && (document.title = `Artisan second œuvre à ${c.name} — T2O Bâtiment`),
  { immediate: true }
);
</script>

<template>
  <div v-if="city">
    <!-- Hero ville -->
    <section class="relative bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 text-white overflow-hidden">
      <div class="hero-glow absolute inset-0 pointer-events-none" />
      <div class="relative mx-auto max-w-6xl px-5 sm:px-6 py-16 sm:py-18 max-w-3xl">
        <span class="inline-flex text-[12px] font-semibold uppercase tracking-widest bg-white/12 border border-white/25 px-3.5 py-1.5 rounded-full mb-5">
          Zone d'intervention · {{ city.name }}
        </span>
        <h1 class="text-3xl sm:text-[2.9rem] font-extrabold leading-[1.12] mb-4.5">
          Rénovation et second œuvre <span class="text-brand-300">à {{ city.name }}</span>
        </h1>
        <p class="text-lg text-[#cddaf0] mb-7 max-w-xl">
          Plâtrerie, sanitaire, électricité, isolation, carrelage et peinture : T2O Bâtiment réalise vos travaux
          d'intérieur à {{ city.name }} et dans les communes voisines.
        </p>
        <router-link
          to="/#contact"
          class="rounded-full bg-brand-600 px-5 py-3 font-semibold text-white hover:-translate-y-px hover:shadow-lg transition"
        >
          Contactez-nous
        </router-link>
      </div>
    </section>

    <!-- Texte local -->
    <section class="py-14 sm:py-16">
      <div class="mx-auto max-w-6xl px-5 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div v-reveal>
          <h2 class="text-2xl font-extrabold mb-4">Un artisan de confiance à {{ city.name }}</h2>
          <p class="text-muted mb-4">{{ city.intro }}</p>
          <p class="text-sm text-muted">
            <b class="text-brand-950">Nous intervenons aussi à :</b> {{ city.autour }} — et partout en Alsace.
          </p>
        </div>
        <div v-reveal class="grid grid-cols-2 gap-3.5">
          <router-link
            v-for="s in SPECS"
            :key="s.slug"
            :to="`/specialites/${s.slug}`"
            class="flex items-center gap-3 bg-white border border-hairline rounded-xl px-4 py-3.5 hover:shadow-lg transition"
          >
            <span class="shrink-0 w-9 h-9 rounded-[10px] bg-brand-soft grid place-items-center">
              <svg class="w-4.5 h-4.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </span>
            <span class="font-semibold text-sm">{{ s.title }}</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Contact pré-rempli -->
    <section id="contact" class="pb-16 sm:pb-18">
      <div class="mx-auto max-w-6xl px-5 sm:px-6">
        <ContactSection :preset-localite="city.name" />
      </div>
    </section>

    <!-- Autres villes -->
    <section class="pb-16 sm:pb-18">
      <div class="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHead kicker="Nos autres secteurs" title="Partout en Alsace" />
        <div class="flex flex-wrap gap-2.5">
          <router-link
            v-for="c in autres"
            :key="c.slug"
            :to="`/${c.slug}`"
            class="rounded-full border border-slate-300 bg-white px-4.5 py-2.5 text-sm font-semibold text-brand-950 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition"
          >
            {{ c.name }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
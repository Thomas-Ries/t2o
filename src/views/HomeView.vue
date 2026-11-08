<script setup>
import { ref } from "vue";
import { SPECS, TESTIMONIALS, FAQ, STATS, CITIES } from "../data/site";
import SectionHead from "../components/SectionHead.vue";
import SpecCarousel from "../components/SpecCarousel.vue";
import BaSlider from "../components/BaSlider.vue";
import ContactSection from "../components/ContactSection.vue";

// Bande « Réalisations » : navigation par chevrons.
const gsc = ref(null);
const gScroll = (dir) => {
  const el = gsc.value;
  if (!el) return;
  el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
};
</script>

<template>
  <!-- Hero -->
  <section class="relative bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 text-white overflow-hidden">
    <div class="hero-glow absolute inset-0 pointer-events-none" />
    <div class="relative mx-auto max-w-6xl px-5 sm:px-6 py-20 sm:py-24 max-w-3xl">
      <span class="inline-flex items-center text-[12px] font-semibold uppercase tracking-widest bg-white/12 border border-white/25 px-3.5 py-1.5 rounded-full mb-5">
        Second œuvre · Bâtiment
      </span>
      <h1 class="text-4xl sm:text-5xl font-extrabold leading-[1.12] mb-4.5">
        Vos travaux d'intérieur,<br />
        <span class="text-brand-300">réalisés de A à Z</span>
      </h1>
      <p class="text-lg text-[#cddaf0] mb-7 max-w-lg">
        Plâtrerie, sanitaire, électricité, isolation, carrelage, peinture : T2O Bâtiment est l'artisan unique qui
        pilote tous les corps de métier de votre chantier — partout en Alsace.
      </p>
      <div class="flex flex-wrap gap-3">
        <router-link to="/#contact" class="rounded-full bg-brand-600 px-5 py-3 font-semibold text-white hover:-translate-y-px hover:shadow-lg transition">
          Contactez-nous
        </router-link>
        <router-link to="/#travaux" class="rounded-full border-[1.5px] border-white/50 text-white px-5 py-3 font-semibold hover:bg-white/10 transition">
          Découvrir nos spécialités
        </router-link>
      </div>
      <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#b9cbe8]">
        <li class="flex items-center gap-2"><span class="text-brand-300">✓</span> Réponse sous 24 h</li>
        <li class="flex items-center gap-2"><span class="text-brand-300">✓</span> Garantie décennale</li>
        <li class="flex items-center gap-2"><span class="text-brand-300">✓</span> Interlocuteur unique</li>
      </ul>
    </div>
  </section>

  <!-- Bandeau de confiance -->
  <section class="border-y border-slate-200 bg-white">
    <div class="mx-auto max-w-6xl px-5 sm:px-6 py-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
      <span class="flex items-center gap-3.5">
        <img src="/logos/aubade.svg" alt="Espace Aubade" class="h-11 w-auto" />
        <span class="text-[15px] font-semibold text-slate-800">Partenaire Espace Aubade Sélestat</span>
      </span>
      <span class="flex items-center gap-2 text-[15px] text-slate-600"><span class="text-brand-600">✓</span> Garantie décennale sur toutes nos réalisations</span>
      <span class="flex items-center gap-2 text-[15px] text-slate-600"><span class="text-brand-600">✓</span> Artisan local</span>
    </div>
  </section>

  <!-- Présentation -->
  <section class="py-16 sm:py-18">
    <div class="mx-auto max-w-6xl px-5 sm:px-6 grid lg:grid-cols-11 gap-12 items-center">
      <div class="lg:col-span-6">
        <span class="block text-brand-600 font-bold text-[13px] uppercase tracking-[0.12em] mb-2.5">L'entreprise</span>
        <h2 v-reveal class="text-2xl sm:text-[2.1rem] font-extrabold leading-tight">
          Un artisan de proximité, un chantier sans stress
        </h2>
        <p class="mt-3.5 text-muted">
          T2O Bâtiment est une entreprise artisanale spécialisée dans le second œuvre, basée à Saint-Pierre-Bois.
          De la pose d'une simple cloison à la rénovation complète d'un logement, nous coordonnons l'ensemble des
          intervenants pour vous garantir un chantier propre, dans les délais et au prix annoncé.
        </p>
        <ul class="mt-4.5 grid gap-2.5">
          <li class="flex gap-2.5">
            <span class="shrink-0 w-5.5 h-5.5 rounded-full bg-brand-soft text-brand-600 grid place-items-center text-xs font-extrabold mt-0.5">✓</span>
            <span><b>Coordination complète</b> — un seul interlocuteur de la prise de contact à la réception.</span>
          </li>
          <li class="flex gap-2.5">
            <span class="shrink-0 w-5.5 h-5.5 rounded-full bg-brand-soft text-brand-600 grid place-items-center text-xs font-extrabold mt-0.5">✓</span>
            <span><b>Chantier propre</b> — protection des sols, évacuation des gravats.</span>
          </li>
          <li class="flex gap-2.5">
            <span class="shrink-0 w-5.5 h-5.5 rounded-full bg-brand-soft text-brand-600 grid place-items-center text-xs font-extrabold mt-0.5">✓</span>
            <span><b>Devis détaillé</b> — aucune surprise sur la facture finale.</span>
          </li>
        </ul>
        <div class="mt-8 grid grid-cols-3 gap-4">
          <div v-for="(s, i) in STATS" :key="i" class="bg-white border border-hairline rounded-xl px-4 py-5 text-center">
            <b v-countup="s" class="block text-2xl sm:text-[1.7rem] text-brand-600 font-extrabold">0</b>
            <span class="text-[13px] text-muted">{{ s[2] }}</span>
          </div>
        </div>
      </div>
      <div v-reveal class="lg:col-span-5 rounded-xl overflow-hidden shadow-lg aspect-[4/3] bg-brand-950">
        <img
          src="https://images.pexels.com/photos/17410734/pexels-photo-17410734.jpeg?auto=compress&cs=tinysrgb&w=1000"
          alt="Artisan T2O Bâtiment sur chantier"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </section>

  <!-- Carrousel spécialités -->
  <section id="travaux" class="py-16 sm:py-18 bg-soft">
    <div class="mx-auto max-w-6xl px-5 sm:px-6">
      <SectionHead kicker="Nos spécialités" title="Tous vos travaux, un seul artisan" sub="Six corps de métier maîtrisés en interne : découvrez nos prestations et cliquez sur une carte pour en savoir plus." />
      <div v-reveal>
        <SpecCarousel />
      </div>
    </div>
  </section>

  <!-- Étapes -->
  <section class="py-16 sm:py-18">
    <div class="mx-auto max-w-6xl px-5 sm:px-6">
      <SectionHead kicker="Comment ça se passe" title="Un déroulé simple et transparent" />
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="(st, i) in [
          ['Contact & échange', 'Vous nous décrivez votre projet, nous échangeons sur votre besoin.'],
          ['Visite technique', 'Nous planifions une visite sur place pour cerner le chantier.'],
          ['Devis détaillé', 'Un devis clair, ligne par ligne, envoyé sous 24 à 48 h.'],
          ['Chantier & réception', 'Réalisation dans les délais, contrôle final ensemble, garanties activées.'],
        ]" :key="i" v-reveal class="bg-white border border-hairline rounded-xl p-6">
          <span class="w-8.5 h-8.5 rounded-[10px] bg-brand-950 text-white grid place-items-center font-extrabold text-sm mb-3.5">{{ i + 1 }}</span>
          <h3 class="font-bold mb-2">{{ st[0] }}</h3>
          <p class="text-sm text-muted">{{ st[1] }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Avant / Après -->
  <section class="py-16 sm:py-18 bg-soft">
    <div class="mx-auto max-w-6xl px-5 sm:px-6">
      <SectionHead kicker="Avant / Après" title="La transformation parle d'elle-même" sub="Glissez le curseur pour comparer un chantier avant et après intervention." />
      <div v-reveal>
        <BaSlider />
      </div>
    </div>
  </section>

  <!-- Réalisations -->
  <section class="py-16 sm:py-18">
    <div class="mx-auto max-w-6xl px-5 sm:px-6">
      <div class="flex items-end justify-between gap-4">
        <SectionHead kicker="Réalisations" title="Nos chantiers en images" sub="Faites défiler et cliquez sur une vignette pour découvrir la spécialité." />
        <div class="flex gap-2.5 shrink-0 pb-10">
          <button
            class="w-10.5 h-10.5 rounded-full border border-slate-300 bg-white grid place-items-center text-brand-950 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition"
            aria-label="Photos précédentes"
            @click="gScroll(-1)"
          >
            ‹
          </button>
          <button
            class="w-10.5 h-10.5 rounded-full border border-slate-300 bg-white grid place-items-center text-brand-950 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition"
            aria-label="Photos suivantes"
            @click="gScroll(1)"
          >
            ›
          </button>
        </div>
      </div>
      <div v-reveal ref="gsc" class="g-scroll flex gap-4.5 overflow-x-auto snap-x pb-3.5">
        <router-link
          v-for="s in SPECS"
          :key="s.slug"
          :to="`/specialites/${s.slug}`"
          class="shrink-0 w-[78vw] sm:w-[420px] aspect-[16/10] rounded-xl overflow-hidden relative snap-start shadow-md hover:-translate-y-1 hover:shadow-xl transition"
        >
          <img :src="s.photo" :alt="`Chantier ${s.title}`" class="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <span class="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-transparent to-transparent" />
          <span class="absolute left-4.5 right-4.5 bottom-4 text-white">
            <b class="block text-lg">{{ s.title }}</b>
            <span class="text-[13px] text-[#cddaf0]">{{ s.badge }} — voir la spécialité →</span>
          </span>
        </router-link>
      </div>
    </div>
  </section>

  <!-- Témoignages -->
  <section class="py-16 sm:py-18 bg-soft">
    <div class="mx-auto max-w-6xl px-5 sm:px-6">
      <SectionHead kicker="Ils nous ont fait confiance" title="Ce que disent nos clients" />
      <div class="grid gap-5 md:grid-cols-3">
        <div v-for="t in TESTIMONIALS" :key="t[0]" v-reveal class="bg-white border border-hairline rounded-xl p-6 min-w-0 break-words">
          <div class="text-[#f5a623] tracking-[2px] mb-2.5 text-sm">★★★★★</div>
          <p class="text-[15px] italic">« {{ t[2] }} »</p>
          <div class="mt-3.5 text-[13px] text-muted"><b class="block text-brand-950">{{ t[0] }}</b>{{ t[1] }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="py-16 sm:py-18">
    <div class="mx-auto max-w-6xl px-5 sm:px-6">
      <SectionHead kicker="Questions fréquentes" title="Vous vous demandez peut-être…" />
      <div class="max-w-3xl grid gap-2.5">
        <details v-for="f in FAQ" :key="f[0]" v-reveal class="bg-white border border-hairline rounded-xl overflow-hidden">
          <summary class="flex justify-between items-center gap-3 px-5 py-4.5 font-semibold cursor-pointer list-none">
            {{ f[0] }}
            <span class="text-xl text-brand-600 transition-transform details-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p class="px-5 pb-4.5 text-[15px] text-muted">{{ f[1] }}</p>
        </details>
      </div>
    </div>
  </section>

  <!-- Villes -->
  <section class="pb-16 sm:pb-18">
    <div class="mx-auto max-w-6xl px-5 sm:px-6">
      <SectionHead kicker="Zone d'intervention" title="Nous intervenons partout en Alsace" sub="Basés à Saint-Pierre-Bois (vallée de Villé), nous rayonnons sur tout le Bas-Rhin et le Haut-Rhin." />
      <div v-reveal class="flex flex-wrap gap-2.5">
        <router-link
          v-for="c in CITIES"
          :key="c.slug"
          :to="`/${c.slug}`"
          class="rounded-full border border-slate-300 bg-white px-4.5 py-2.5 text-sm font-semibold text-brand-950 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition"
        >
          {{ c.name }}
        </router-link>
        <span class="rounded-full bg-brand-soft px-4.5 py-2.5 text-sm font-semibold text-brand-600">… et toute l'Alsace</span>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-16 sm:py-18">
    <div class="mx-auto max-w-6xl px-5 sm:px-6">
      <ContactSection />
    </div>
  </section>
</template>
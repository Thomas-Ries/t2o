<script setup>
</script>

<template>
  <section class="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 text-white">
    <div class="mx-auto max-w-6xl px-5 sm:px-6 py-24 max-w-2xl text-center">
      <span class="inline-flex text-[12px] font-semibold uppercase tracking-widest bg-white/12 border border-white/25 px-3.5 py-1.5 rounded-full mb-5">
        Erreur 404
      </span>
      <h1 class="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">Cette page<br /><span class="text-brand-300">n'existe pas</span></h1>
      <p class="text-lg text-[#cddaf0] mb-8 mx-auto max-w-md">Le lien est peut-être erroné ou la page a été déplacée.</p>
      <div class="flex flex-wrap justify-center gap-3">
        <router-link to="/" class="rounded-full bg-brand-600 px-5 py-3 font-semibold text-white hover:-translate-y-px hover:shadow-lg transition">
          Retour à l'accueil
        </router-link>
        <router-link to="/#contact" class="rounded-full border-[1.5px] border-white/50 text-white px-5 py-3 font-semibold hover:bg-white/10 transition">
          Contactez-nous
        </router-link>
      </div>
    </div>
  </section>
</template>

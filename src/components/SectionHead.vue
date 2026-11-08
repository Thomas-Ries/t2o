<script setup>
defineProps({ kicker: String, title: String, sub: String, center: Boolean });
</script>

<template>
  <div v-reveal class="max-w-xl mb-10" :class="center && 'mx-auto text-center'">
    <span class="block text-brand-600 font-bold text-[13px] uppercase tracking-[0.12em] mb-2.5">{{ kicker }}</span>
    <h2 class="text-2xl sm:text-[2.1rem] font-extrabold leading-tight">{{ title }}</h2>
    <p v-if="sub" class="mt-3 text-muted">{{ sub }}</p>
  </div>
</template>

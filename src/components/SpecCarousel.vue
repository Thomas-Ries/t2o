<script setup>
// Carrousel des 6 spécialités (desktop 3 visibles / tablette 2 / mobile 1).
import { ref, computed, onMounted, onUnmounted } from "vue";
import { SPECS } from "../data/site";

const track = ref(null);
const index = ref(0);
const winW = ref(window.innerWidth);
const onResize = () => (winW.value = window.innerWidth);
onMounted(() => window.addEventListener("resize", onResize));
onUnmounted(() => window.removeEventListener("resize", onResize));

const perView = computed(() => (winW.value < 641 ? 1 : winW.value < 901 ? 2 : 3));
const maxIndex = computed(() => Math.max(0, SPECS.length - perView.value));
const step = computed(() => {
  if (!track.value) return 0;
  const card = track.value.querySelector(".spec-card");
  return card ? card.getBoundingClientRect().width + 20 : 0;
});
const style = computed(() => ({ transform: `translateX(-${index.value * step.value}px)` }));
function prev() {
  index.value = index.value === 0 ? maxIndex.value : index.value - 1;
}
function next() {
  index.value = index.value === maxIndex.value ? 0 : index.value + 1;
}
</script>

<template>
  <div>
    <div class="overflow-hidden rounded-xl">
      <div ref="track" class="flex gap-5 transition-transform duration-500 ease-out" :style="style">
        <router-link
          v-for="s in SPECS"
          :key="s.slug"
          :to="`/specialites/${s.slug}`"
          class="spec-card shrink-0 bg-white border border-hairline rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition w-[calc((100%-40px)/3)]"
          :style="{ flexBasis: `calc((100% - ${(perView - 1) * 20}px) / ${perView})` }"
        >
          <div class="relative aspect-[16/10] bg-gradient-to-br from-brand-950 to-brand-500">
            <img :src="s.photo" :alt="s.title" loading="lazy" class="absolute inset-0 h-full w-full object-cover" />
            <span class="absolute left-3 bottom-3 bg-brand-950/85 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              {{ s.badge }}
            </span>
          </div>
          <div class="p-4.5">
            <h3 class="font-bold text-brand-950 mb-1.5">{{ s.title }}</h3>
            <p class="text-sm text-muted line-clamp-3">{{ s.lead }}</p>
            <span class="mt-3 inline-flex gap-1.5 text-sm font-semibold text-brand-600">Voir le corps de métier →</span>
          </div>
        </router-link>
      </div>
    </div>

    <div class="mt-5 flex items-center justify-between">
      <div class="flex gap-2">
        <button
          v-for="i in SPECS.length"
          :key="i"
          class="h-2 rounded-full transition-all"
          :class="i - 1 === index ? 'w-5.5 bg-brand-600' : 'w-2 bg-slate-300'"
          :aria-label="`Aller à la carte ${i}`"
          @click="index = Math.min(i - 1, maxIndex)"
        />
      </div>
      <div class="flex gap-2.5">
        <button
          class="w-10.5 h-10.5 rounded-full border border-slate-300 bg-white grid place-items-center text-brand-950 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition"
          aria-label="Précédent"
          @click="prev"
        >
          ‹
        </button>
        <button
          class="w-10.5 h-10.5 rounded-full border border-slate-300 bg-white grid place-items-center text-brand-950 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition"
          aria-label="Suivant"
          @click="next"
        >
          ›
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
// Slider Avant / Après — glissement pointer (souris + tactile).
import { ref } from "vue";

const pct = ref(50);
const dragging = ref(false);
const wrap = ref(null);

function move(clientX) {
  const r = wrap.value.getBoundingClientRect();
  pct.value = Math.min(Math.max(((clientX - r.left) / r.width) * 100, 4), 96);
}
function down(e) {
  dragging.value = true;
  wrap.value.setPointerCapture(e.pointerId);
  move(e.clientX);
}
</script>

<template>
  <div
    ref="wrap"
    class="relative mx-auto max-w-3xl aspect-[16/10] rounded-xl overflow-hidden shadow-lg select-none touch-none"
    @pointerdown="down"
    @pointermove="(e) => dragging && move(e.clientX)"
    @pointerup="dragging = false"
    @pointercancel="dragging = false"
  >
    <!-- Après -->
    <img
      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70"
      alt="Chantier après intervention"
      class="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
    />
    <span class="absolute top-3.5 right-3.5 bg-brand-950/75 text-white text-xs font-bold px-3 py-1 rounded-full">Après</span>

    <!-- Avant (clippé) -->
    <div class="absolute inset-0 overflow-hidden" :style="{ clipPath: `inset(0 ${100 - pct}% 0 0)` }">
      <img
        src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=1200&q=70"
        alt="Chantier avant intervention"
        class="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <span class="absolute top-3.5 left-3.5 bg-brand-950/75 text-white text-xs font-bold px-3 py-1 rounded-full">Avant</span>
    </div>

    <!-- Poignée -->
    <div class="absolute top-0 bottom-0 w-[3px] bg-white cursor-ew-resize shadow-md" :style="{ left: pct + '%' }">
      <span
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-brand-950 grid place-items-center font-bold shadow-lg"
      >
        ⇔
      </span>
    </div>
  </div>
  <p class="mt-3.5 text-center text-[13px] text-muted">← Glissez le curseur →</p>
</template>

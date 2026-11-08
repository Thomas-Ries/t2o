<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";

const showSticky = ref(false);
const onScroll = () => {
  // Barre masquée quand le formulaire de contact (#contact) entre dans l'écran.
  const el = document.getElementById("contact");
  const formVisible = el && el.getBoundingClientRect().top < window.innerHeight;
  showSticky.value = window.scrollY > 500 && !formVisible;
};
onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <SiteHeader />
  <main>
    <router-view />
  </main>
  <SiteFooter />

  <!-- Barre CTA collante mobile -->
  <transition name="slide">
    <div
      v-if="showSticky"
      class="fixed inset-x-0 bottom-0 z-50 bg-brand-950/95 backdrop-blur px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] sm:hidden shadow-[0_-6px_20px_rgba(15,36,64,.25)]"
    >
      <router-link
        to="/#contact"
        class="block w-full text-center rounded-full bg-brand-600 px-5 py-3.5 font-semibold text-white"
      >
        Contactez-nous
      </router-link>
    </div>
  </transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%);
}
</style>
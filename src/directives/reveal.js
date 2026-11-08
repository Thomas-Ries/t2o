// v-reveal : apparition douce au scroll.
// v-countup : compteur animé quand l'élément entre dans le viewport.

let io = null;

function observer() {
  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (!en.isIntersecting) continue;
          const el = en.target;
          if (el.classList.contains("v-reveal")) el.classList.add("is-in");
          if (el.__countup && !el.__counted) {
            el.__counted = true;
            animate(el, el.__countup);
          }
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
  }
  return io;
}

function animate(el, [target, suffix]) {
  const start = performance.now();
  const dur = 1200;
  const tick = (t) => {
    const p = Math.min((t - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export const reveal = {
  mounted(el) {
    el.classList.add("v-reveal");
    observer().observe(el);
  },
};

export const countup = {
  mounted(el, binding) {
    const n = parseInt(binding.value?.[0] ?? binding.value ?? "0", 10);
    const suffix = binding.value?.[1] ?? "";
    el.__countup = [n, suffix];
    el.textContent = "0" + suffix;
    observer().observe(el);
  },
};

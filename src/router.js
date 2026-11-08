import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import SpecView from "./views/SpecView.vue";
import CityView from "./views/CityView.vue";
import MentionsLegalesView from "./views/MentionsLegalesView.vue";
import ConfidentialiteView from "./views/ConfidentialiteView.vue";
import NotFoundView from "./views/NotFoundView.vue";
import { CITIES } from "./data/site";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/specialites/:slug", name: "spec", component: SpecView },
    // Pages ville pour le SEO local : /renovation-strasbourg, /renovation-selestat…
    ...CITIES.map((c) => ({
      path: `/${c.slug}`,
      name: `city-${c.slug}`,
      component: CityView,
      props: { citySlug: c.slug },
    })),
    { path: "/mentions-legales", name: "ml", component: MentionsLegalesView },
    { path: "/politique-confidentialite", name: "privacy", component: ConfidentialiteView },
    { path: "/:pathMatch(.*)*", name: "notfound", component: NotFoundView },
  ],
  scrollBehavior(to, from, saved) {
    if (saved) return saved;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0 };
  },
});
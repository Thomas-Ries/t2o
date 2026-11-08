import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { reveal, countup } from "./directives/reveal";
import "./style.css";

const app = createApp(App);
app.use(router);
app.directive("reveal", reveal);
app.directive("countup", countup);
app.mount("#app");

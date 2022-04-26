import { createApp } from "vue";
import App from "./App.vue";
import HeaderDeEng from "./components/layout/HeaderDeEng.vue";
import HeaderLogo from "./components/layout/HeaderLogo.vue";

const app = createApp(App);
app.component("header-de-eng", HeaderDeEng);
app.component("header-logo", HeaderLogo);
app.mount("#app");

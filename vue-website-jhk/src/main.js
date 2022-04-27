import { createApp } from "vue";
import App from "./App.vue";
import HeaderDeEng from "./components/layout/HeaderDeEng.vue";
import HeaderLogo from "./components/layout/HeaderLogo.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseNavigation from "./components/UI/BaseNavigation.vue";

const app = createApp(App);
app.component("header-de-eng", HeaderDeEng);
app.component("header-logo", HeaderLogo);
app.component("base-button", BaseButton);
app.component("base-navigation", BaseNavigation);
app.mount("#app");

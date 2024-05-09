import { createApp } from "vue";
import App from "./App.vue";
import VueCookies from "vue-cookies";
import VueAxios from "vue-axios";
import axios from "axios";
import { store } from "../../storage/store/store";
import router from "./router";

createApp(App)
    .use(router)
    .use(store)
    .use(VueCookies)
    .use(VueAxios, axios)
    .mount("#app");

axios.defaults.headers.common["X-CSRF-TOKEN"] = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");

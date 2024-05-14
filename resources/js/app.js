import { createApp } from "vue";
import App from "./App.vue";
import VueCookies from "vue-cookies";
import VueAxios from "vue-axios";
import axios from "axios";
import { store } from "../../storage/store/store";
import router from "./router";

axios.defaults.headers.common["X-CSRF-TOKEN"] = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content");

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueCookies);
app.use(VueAxios, axios);

// router.push("/DashBoard");

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toaster from "@meforma/vue-toaster";
import "bootstrap/dist/css/bootstrap.css";

createApp(App).use(router).use(Toaster).mount("#app");

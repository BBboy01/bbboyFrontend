import AOS from "aos";
import "aos/dist/aos.css";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./store";

AOS.init();

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount("#app");

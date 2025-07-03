import { createApp, type Component } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons-vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";

const app = createApp(App);

Object.entries(Icons).forEach(([key, component]) => {
  app.component(key, component as Component);
});

app.use(createPinia()).use(router).use(ElementPlus);
app.mount("#app");

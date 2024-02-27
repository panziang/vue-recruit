import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "@/assets/css/style.css";
import "vant/es/toast/style";
import "@/utils/rem";
import { directives } from "@/utils/common";

const app = createApp(App);
//自定义指令注册
directives(app);

app.use(createPinia());
app.use(router);

app.mount("#app");

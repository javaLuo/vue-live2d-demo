import { createApp } from "vue";
import App from "./App.vue";
import { Dialog } from "vant";
import "vant/lib/index.css";
import "./styles/global.less";

const app = createApp(App);
app.use(Dialog);
app.mount("#app");

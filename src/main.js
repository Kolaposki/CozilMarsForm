import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "@vuepic/vue-datepicker/dist/main.css";


const app = createApp(App);
app.use(store);
app.use(Toast);

app.mount("#app");
// createApp(App).use(store).mount("#app");

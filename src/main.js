import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'
import ElementPlus from 'element-plus'
import './css/style.css'
import 'element-plus/dist/index.css'

const pinia = createPinia()

const app = createApp(App);
export const plugins = [ElementPlus, router, pinia];

plugins.forEach((plugin) => {
  app.use(plugin);
});
app.mount("#app");
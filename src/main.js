import { createApp } from 'vue'
import './css/fonts.css'
import './css/style.css'
import App from './App.vue'
import router from './router/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(router).use(ElementPlus).mount('#app')

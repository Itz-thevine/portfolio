import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueSmoothScroll from 'vue3-smooth-scroll'
import VueWriter from "vue-writer";

const app = createApp(App)
app.use(VueSmoothScroll)
app.use(VueWriter)
app.mount('#app')

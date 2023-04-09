import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/index.css'

const app = createApp(App)
document.body.classList.add('dark');

app.use(router)

app.mount('#app')

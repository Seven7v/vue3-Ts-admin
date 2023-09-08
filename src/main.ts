import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initRouter } from './routes'
import { initI18n } from './i18n'

const app = createApp(App)
initI18n(app)
initRouter(app)
app.mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initRouter } from './routes'

const app = createApp(App)
initRouter(app)
app.mount('#app')

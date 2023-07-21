import './assets/main.scss'
import 'sweetalert2/dist/sweetalert2.min.css';
import * as bootstrap from 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

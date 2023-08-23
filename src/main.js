import { createApp } from 'vue'
import App from './App.vue'
import './css/estilos.css' 
import router from './router/router'

//bootstrap
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router).mount('#app')

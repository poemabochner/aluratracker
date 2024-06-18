import { createApp } from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.min.css';
import roteador from './router';

createApp(App)
.use(roteador)
.mount('#app')

import { createApp } from 'vue'
import './style.css'  // <--- ¡ESTA LÍNEA ES LA CLAVE! SI NO ESTÁ, NADA FUNCIONA.
import App from './App.vue'

createApp(App).mount('#app')
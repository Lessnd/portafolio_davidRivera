import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')

// Controlamos el Loader Manualmente
const loader = document.getElementById('initial-loader')

// Si el loader existe en el HTML...
if (loader) {
    // Esperamos 800ms (0.8 segundos) fijos
    setTimeout(() => {
        // Agregamos la clase para desvanecerlo
        loader.classList.add('loader-fade-out')

        // Esperamos 500ms más (lo que dura la transición CSS) para borrarlo
        setTimeout(() => {
            loader.remove()
            document.body.style.overflow = 'auto'
        }, 500)

    }, 800)
}
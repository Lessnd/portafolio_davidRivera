import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    // Minificación agresiva
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Borra los console.log en producción
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        // Dividir librerías grandes en archivos separados (Vendor Chunking)
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Separa Vue y otras librerías del código principal
            return 'vendor';
          }
        }
      }
    }
  }
})
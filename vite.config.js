import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: true, // Asegura que el CSS se divida
    rollupOptions: {
      output: {
        manualChunks: undefined // Deja que Vite decida
      }
    }
  }
})

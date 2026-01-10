<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue'; // <--- Importar
</script>

<template>
  <div class="min-h-screen bg-dark text-slate-200 selection:bg-primary selection:text-darker">
    <Navbar />
    
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Skills /> </main>
    
    <footer class="py-8 bg-darker text-center text-slate-600 text-sm border-t border-slate-800/50">
      <p>&copy; 2026 David Rivera. Desarrollado con Vue 3 & Tailwind.</p>
      <div class="mt-2 flex justify-center gap-4 text-lg">
        <a aria-label="Visitar perfil de GitHub" href="#" class="hover:text-primary transition-colors"><i class="bi bi-github"></i></a>
        <a aria-label="Visitar perfil de LinkedIn" href="#" class="hover:text-primary transition-colors"><i class="bi bi-linkedin"></i></a>
      </div>
    </footer>
  </div>
</template>
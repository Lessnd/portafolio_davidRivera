<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue' // <--- IMPORTAR
</script>

<template>
  <div class="bg-dark min-h-screen">
    <Navbar />
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Experience /> <Contact />    </main>
  </div>
</template>
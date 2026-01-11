<script setup>
import { ref } from 'vue';
import { Menu, X } from 'lucide-vue-next'; // Importamos iconos de menú

const isOpen = ref(false);
const toggleMenu = () => isOpen.value = !isOpen.value;
</script>

<template>
    <nav class="fixed top-0 w-full z-50 bg-dark/90 backdrop-blur-md border-b border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">

                <div class="flex-shrink-0">
                    <a href="#" class="text-xl font-bold text-white tracking-wide">
                        <span class="text-primary">&lt;</span>David Rivera<span class="text-primary">/&gt;</span>
                    </a>
                </div>

                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <a href="#inicio"
                            class="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Inicio</a>
                        <a href="#proyectos"
                            class="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Proyectos</a>
                        <a href="#habilidades"
                            class="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Stack</a>
                        <a href="#experiencia"
                            class="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Experiencia</a>
                        <a href="#contacto" 
                            class="text-gray-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Contacto</a>
                    </div>
                </div>

                <div class="-mr-2 flex md:hidden">
                    <button aria-label="Abrir menú de navegación" @click="toggleMenu" type="button"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors">
                        <Menu v-if="!isOpen" :size="28" />
                        <X v-else :size="28" />
                    </button>
                </div>
            </div>
        </div>

        <div v-show="isOpen" class="md:hidden bg-darker border-b border-white/10 shadow-xl">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#inicio" @click="isOpen = false"
                    class="text-gray-300 hover:text-primary hover:bg-white/5 block px-3 py-4 rounded-md text-base font-medium transition-colors">Inicio</a>
                <a href="#proyectos" @click="isOpen = false"
                    class="text-gray-300 hover:text-primary hover:bg-white/5 block px-3 py-4 rounded-md text-base font-medium transition-colors">Proyectos</a>  
                <a href="#habilidades" @click="isOpen = false"
                    class="text-gray-300 hover:text-primary hover:bg-white/5 block px-3 py-4 rounded-md text-base font-medium transition-colors">Stack</a>
                <a href="#experiencia" @click="isOpen = false"
                    class="text-gray-300 hover:text-primary hover:bg-white/5 block px-3 py-4 rounded-md text-base font-medium transition-colors">Experiencia</a>
                <a href="#contacto" @click="isOpen = false" 
                    class="text-gray-300 hover:text-primary hover:bg-white/5 block px-3 py-4 rounded-md text-base font-medium transition-colors">Contacto</a>
            </div>
        </div>
    </nav>
</template>
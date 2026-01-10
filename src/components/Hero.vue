<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollPosition = ref(0);

const handleScroll = () => {
    // OPTIMIZACIÓN CRÍTICA:
    // Si la pantalla es menor a 768px (móvil), forzamos la posición a 0.
    // Esto desactiva el parallax y elimina el "tembleque" o saltos raros.
    if (window.innerWidth < 768) {
        scrollPosition.value = 0;
        return;
    }

    // En escritorio, guardamos la posición para el efecto
    scrollPosition.value = window.scrollY;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    // Agregamos resize por si el usuario gira el celular o cambia el tamaño de ventana
    window.addEventListener('resize', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleScroll);
});
</script>

<template>
    <section 
    id="inicio" 
    class="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-dark"
    :style="{ transform: `translateY(${scrollPosition * 0.5}px)` }"
    >
        <div
            class="absolute top-20 right-0 -mr-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none">
        </div>
        <div
            class="absolute bottom-20 left-0 -ml-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none">
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">

            <div class="space-y-6 z-10 text-center md:text-left md:order-1">

                <div
                    class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mx-auto md:mx-0">
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Disponible para trabajar
                </div>

                <h1 class="text-4xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                    Frontend <br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                        Developer
                    </span>
                </h1>

                <p class="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed mx-auto md:mx-0">
                    Especializado en crear experiencias web fluidas con <strong class="text-white">Vue.js</strong> y
                    aplicaciones móviles con <strong class="text-white">Flutter</strong>.
                    Diseño interfaces limpias, escribo código mantenible y uso Linux.
                </p>

                <div class="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
                    <a href="#proyectos"
                        class="px-6 py-3 bg-primary text-darker font-bold rounded-lg hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] w-full sm:w-auto">
                        Ver Proyectos
                    </a>
                    <a href="/assets/CV_David_Rivera.pdf" target="_blank" download
                        class="px-6 py-3 border border-slate-700 rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all text-white w-full sm:w-auto">
                        Descargar CV
                    </a>
                </div>

                <div class="pt-8 border-t border-slate-800/50 mt-8">
                    <p class="text-sm text-slate-500 mb-4 font-mono">STACK PRINCIPAL</p>
                    <div class="flex gap-6 text-3xl text-slate-400 justify-center md:justify-start">
                        <i class="devicon-vuejs-plain hover:text-green-400 transition-colors cursor-help" title="Vue.js"></i>
                        <i class="devicon-tailwindcss-plain hover:text-cyan-400 transition-colors cursor-help" title="Tailwind CSS"></i>
                        <i class="devicon-flutter-plain hover:text-blue-400 transition-colors cursor-help" title="Flutter"></i>
                        <i class="devicon-typescript-plain hover:text-blue-600 transition-colors cursor-help" title="TypeScript"></i>
                        <i class="devicon-linux-plain hover:text-yellow-500 transition-colors cursor-help" title="Linux User"></i>
                    </div>
                </div>
            </div>

            <div class="relative block group mb-8 md:mb-0 px-4 md:px-0 order-first md:order-2">
                <div
                    class="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                </div>
                <div
                    class="relative bg-card border border-slate-700/50 rounded-2xl p-2 overflow-hidden shadow-2xl max-w-sm mx-auto md:max-w-none">
                    <div class="aspect-square bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden">
                        <img src="/assets/img/me.webp" alt="David Rivera"
                            class="object-cover w-full h-full opacity-80 hover:scale-105 transition-transform duration-500">
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
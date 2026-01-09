<script setup>
const projects = [
    {
        title: 'Max Express Platform',
        role: 'Frontend & UI Designer',
        desc: 'Plataforma web para gestión logística. Diseñé la interfaz en Figma y desarrollé componentes reactivos reutilizables para el dashboard de administración.',
        tech: ['Vue.js', 'Tailwind', 'Figma', 'API REST'],
        // Si no tienes captura aún, usa un placeholder, pero CÁMBIALO pronto
        image: '#',  //'/assets/img/project1.jpg',
        link: '#',
        repo: '#'
    },
    {
        title: 'Proyecto de Investigación Anual, ITCA SM',
        role: 'Flutter Developer',
        desc: 'Aplicación móvil para gestión de productividad y control de horas. Implementación de arquitectura limpia y gestión de estado eficiente.',
        tech: ['Flutter', 'Dart', 'Mobile', 'Android'],
        image: '#',  //'/assets/img/project2.jpg',
        link: '#',
        repo: '#'
    },
    {
        title: 'Tech Portfolio',
        role: 'Frontend Developer',
        desc: 'Este portafolio. Desarrollado con el ecosistema moderno de Vue para demostrar performance, accesibilidad y diseño limpio.',
        tech: ['Vue 3', 'Vite', 'Tailwind CSS'],
        image: '#',  //'/assets/img/project3.jpg',
        link: '#',
        repo: 'https://github.com/melissaraujo00' // Pon tu usuario real aquí
    }
]
</script>

<template>
    <section id="proyectos" class="py-20 bg-darker">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div class="mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                    <span class="text-primary">02.</span> Proyectos Destacados
                </h2>
                <div class="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(project, index) in projects" :key="index"
                    class="group bg-card rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                    <div class="relative h-48 overflow-hidden bg-slate-800">
                        <img :src="project.image" :alt="project.title"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100">

                        <div
                            class="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                            <a :href="project.repo" target="_blank"
                                class="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-darker transition-colors text-white">
                                <i class="bi bi-github text-xl"></i>
                            </a>
                            <a :href="project.link" target="_blank"
                                class="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-darker transition-colors text-white">
                                <i class="bi bi-box-arrow-up-right text-xl"></i>
                            </a>
                        </div>
                    </div>

                    <div class="p-6">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold text-white group-hover:text-primary transition-colors">{{
                                project.title }}</h3>
                        </div>
                        <p class="text-sm text-primary mb-3">{{ project.role }}</p>
                        <p class="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                            {{ project.desc }}
                        </p>

                        <div class="flex flex-wrap gap-2 mt-auto">
                            <span v-for="tag in project.tech" :key="tag"
                                class="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                {{ tag }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
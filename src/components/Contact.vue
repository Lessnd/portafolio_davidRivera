<script setup>
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-vue-next';

const contactInfo = [
    {
        icon: Mail,
        title: 'Envíame un correo',
        value: 'david.alessandre04@gmail.com',
        link: 'mailto:david.alessandre04@gmail.com',
        action: 'Escribir ahora',
        color: 'text-primary'
    },
    {
        icon: Linkedin,
        title: 'LinkedIn',
        value: 'David Rivera',
        link: 'https://www.linkedin.com/in/alessandrerivera/',
        action: 'Conectar',
        color: 'text-blue-400'
    },
    {
        icon: Github,
        title: 'GitHub',
        value: 'Lessnd',
        link: 'https://github.com/Lessnd',
        action: 'Ver Repositorio',
        color: 'text-white'
    }
]
</script>

<template>
    <section id="contacto" class="relative z-10 py-20 bg-darker overflow-hidden">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div class="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                    <span class="text-primary">04.</span> Hablemos
                </h2>
                <p class="text-slate-400 max-w-xl mx-auto">
                    ¿Tienes un proyecto en mente o buscas un desarrollador que entienda de rendimiento y negocio? Mi
                    bandeja de entrada está abierta.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a v-for="(item, index) in contactInfo" :key="index" :href="item.link" target="_blank"
                    rel="noopener noreferrer"
                    class="group bg-card border border-white/5 p-6 rounded-2xl hover:border-primary/30 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
                    :aria-label="item.title">
                    <div
                        class="p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-300">
                        <component :is="item.icon" :size="32" :class="item.color" />
                    </div>

                    <h3 class="text-lg font-bold text-white mb-1">{{ item.title }}</h3>
                    <p class="text-sm text-slate-400 mb-4">{{ item.value }}</p>

                    <span
                        class="mt-auto text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-darker transition-colors">
                        {{ item.action }}
                    </span>
                </a>
            </div>

            <div class="mt-20 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
                <p>&copy; {{ new Date().getFullYear() }} David Rivera. Construido con Vue 3 & Tailwind.</p>
            </div>

        </div>
    </section>
</template>
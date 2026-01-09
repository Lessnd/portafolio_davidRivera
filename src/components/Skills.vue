<script setup>
// Importamos los iconos directamente como componentes
import {
    Code2, FileCode2, Zap, Palette,
    Layers, Database, Route, Box,
    Network, Server, Lock, Cloud,
    CheckCircle2, Figma, GitBranch, ClipboardCheck
} from 'lucide-vue-next';

const skillCategories = [
    {
        title: "Núcleo Frontend",
        icon: Code2, // Icono de la categoría
        tools: [
            { name: "Vue 3", icon: Code2 }, // Vue no tiene icono en Lucide (es marca), usamos Code2 o similar
            { name: "TypeScript", icon: FileCode2 },
            { name: "Vite", icon: Zap },
            { name: "Tailwind", icon: Palette }
        ],
        concepts: ["Composition API", "Script Setup", "Strict Typing", "Atomic Design"]
    },
    {
        title: "Arquitectura & Estado",
        icon: Layers,
        tools: [
            { name: "Pinia", icon: Database }, // Pinia (Store) -> Database
            { name: "Vue Router", icon: Route },
            { name: "Composables", icon: Box }
        ],
        concepts: ["Feature-based Structure", "Global Stores", "Route Guards", "Logic Reusability"]
    },
    {
        title: "Comunicación & API",
        icon: Network,
        tools: [
            { name: "Axios", icon: Cloud },
            { name: "REST API", icon: Server },
            { name: "JWT Auth", icon: Lock }
        ],
        concepts: ["Interceptores HTTP", "Centralized Error Handling", "Loading States", "Token Management"]
    },
    {
        title: "Calidad & UI",
        icon: CheckCircle2,
        tools: [
            { name: "Vitest", icon: ClipboardCheck },
            { name: "Figma", icon: Figma }, // Lucide SI tiene icono de Figma
            { name: "Git", icon: GitBranch } // Y de Git
        ],
        concepts: ["Unit Testing", "Pixel Perfect", "Interactive States", "Empty States UX"]
    }
]
</script>

<template>
    <section id="habilidades" class="py-16 md:py-20 bg-dark relative overflow-hidden">
        <div
            class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-dark to-dark pointer-events-none">
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div class="mb-12 md:mb-16 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                    <span class="text-primary">03.</span> Stack Técnico
                </h2>
                <p class="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
                    Arquitecturas escalables, código limpio y herramientas modernas.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div v-for="(category, index) in skillCategories" :key="index"
                    class="bg-card border border-white/5 rounded-xl p-5 md:p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">

                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <component :is="category.icon" :size="24" />
                        </div>
                        <h3 class="text-xl font-bold text-white">{{ category.title }}</h3>
                    </div>

                    <div class="flex flex-wrap gap-6 mb-6">
                        <div v-for="tool in category.tools" :key="tool.name" class="flex flex-col items-center gap-2">
                            <component :is="tool.icon" :size="32" stroke-width="1.5"
                                class="text-slate-400 group-hover:text-white transition-colors" />
                            <span class="text-xs text-slate-500 font-medium">{{ tool.name }}</span>
                        </div>
                    </div>

                    <div class="border-t border-white/5 pt-4">
                        <div class="flex flex-wrap gap-2">
                            <span v-for="concept in category.concepts" :key="concept"
                                class="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                                {{ concept }}
                            </span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>
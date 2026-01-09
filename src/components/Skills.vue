<script setup>
const skillCategories = [
    {
        title: "Núcleo Frontend",
        icon: "bi-code-square", // Icono de Bootstrap
        tools: [
            { name: "Vue 3", icon: "devicon-vuejs-plain" },
            { name: "TypeScript", icon: "devicon-typescript-plain" },
            { name: "Vite", icon: "devicon-vitejs-plain" }, // A veces es 'devicon-vite-original' o 'plain'
            { name: "Tailwind", icon: "devicon-tailwindcss-original" }
        ],
        concepts: ["Composition API", "Script Setup", "Strict Typing", "Atomic Design"]
    },
    {
        title: "Arquitectura & Estado",
        icon: "bi-layers",
        tools: [
            { name: "Pinia", icon: "bi-database" }, // Pinia a veces no tiene icono en packs viejos, usamos fallback
            { name: "Vue Router", icon: "bi-signpost-split" },
            { name: "Composables", icon: "bi-puzzle" }
        ],
        concepts: ["Feature-based Structure", "Global Stores", "Route Guards", "Logic Reusability"]
    },
    {
        title: "Comunicación & API",
        icon: "bi-hdd-network",
        tools: [
            { name: "Axios", icon: "devicon-axios-plain" }, // O fallback visual
            { name: "REST API", icon: "bi-cloud-arrow-down" },
            { name: "JWT Auth", icon: "bi-shield-lock" }
        ],
        concepts: ["Interceptores HTTP", "Centralized Error Handling", "Loading States", "Token Management"]
    },
    {
        title: "Calidad & UI",
        icon: "bi-check-circle",
        tools: [
            { name: "Vitest", icon: "devicon-vitest-plain" },
            { name: "Figma", icon: "devicon-figma-plain" },
            { name: "Git", icon: "devicon-git-plain" }
        ],
        concepts: ["Unit Testing", "Pixel Perfect", "Interactive States", "Empty States UX"]
    }
]
</script>

<template>
    <section id="habilidades" class="py-20 bg-dark relative overflow-hidden">
        <div
            class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-dark to-dark pointer-events-none">
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div class="mb-16 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                    <span class="text-primary">03.</span> Stack Tecnológico
                </h2>
                <p class="text-slate-400 max-w-2xl mx-auto">
                    No solo uso herramientas, diseño arquitecturas escalables enfocadas en mantenibilidad y experiencia
                    de usuario.
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
                <div v-for="(category, index) in skillCategories" :key="index"
                    class="bg-card border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">

                    <div class="flex items-center gap-3 mb-6">
                        <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <i :class="['bi text-xl', category.icon]"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white">{{ category.title }}</h3>
                    </div>

                    <div class="flex flex-wrap gap-6 mb-6">
                        <div v-for="tool in category.tools" :key="tool.name" class="flex flex-col items-center gap-2">
                            <i v-if="tool.icon.includes('devicon')"
                                :class="[tool.icon, 'text-3xl text-slate-400 group-hover:text-white transition-colors']"></i>
                            <i v-else
                                :class="['bi', tool.icon, 'text-3xl text-slate-400 group-hover:text-white transition-colors']"></i>

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
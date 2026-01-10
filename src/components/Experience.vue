<script setup>
const experience = [
    {
        company: 'Proyecto Max Express',
        role: 'Frontend Developer & UI',
        period: 'Sep 2025 - Presente',
        desc: 'Desarrollo freelance de interfaces modernas. Traduje requerimientos de negocio en prototipos de Figma y código Vue.js limpio.'
    },
    {
        company: 'ISDEMU',
        role: 'Soporte Técnico (Pasantía)',
        period: 'Sep 2025 - Dic 2025',
        desc: 'Diagnóstico de hardware/software y asistencia a usuarios. Mantenimiento de infraestructura TI garantizando continuidad operativa.'
    },
    {
        company: 'ITCA-FEPADE',
        role: 'Desarrollador Móvil (Prácticas Profesionales)',
        period: 'May 2025 - Oct 2025',
        desc: 'Desarrollo de aplicaciones móviles. Participación en el ciclo de vida completo del desarrollo de software.'
    }
]
</script>

<template>
    <section id="experiencia" class="relative z-10 bg-dark py-20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <div class="mb-12 text-center md:text-left">
                <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                    <span class="text-primary">01.</span> Trayectoria
                </h2>
                <div class="h-1 w-20 bg-primary rounded-full mx-auto md:mx-0"></div>
            </div>

            <div class="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
                <div v-for="(job, index) in experience" :key="index" class="relative pl-8 md:pl-12">

                    <div
                        class="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-dark border-2 border-primary shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                    </div>

                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 class="text-xl font-bold text-white">{{ job.role }}</h3>
                        <span
                            class="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                            {{ job.period }}
                        </span>
                    </div>

                    <h4 class="text-lg text-slate-400 mb-3 font-medium">{{ job.company }}</h4>
                    <p class="text-slate-400 leading-relaxed max-w-2xl">
                        {{ job.desc }}
                    </p>
                </div>
            </div>

        </div>
    </section>
</template>
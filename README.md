# Portafolio Profesional - David Rivera <DR/>

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100%2F100-success?style=for-the-badge&logo=lighthouse&logoColor=white)

> **Live Demo:** [https://davidrivera-dev.vercel.app/](https://davidrivera-dev.vercel.app/)

Este repositorio contiene el código fuente de mi portafolio profesional como **Frontend Developer Jr**. Más que una simple muestra de proyectos, esta aplicación está diseñada para demostrar buenas prácticas de ingeniería de software, arquitectura limpia y optimización extrema de rendimiento web (Web Vitals).

## Highlights de Rendimiento

El objetivo principal de este desarrollo fue lograr la perfección técnica en métricas de Google Lighthouse, asegurando una experiencia de usuario instantánea incluso en redes 3G/4G.

| Métrica | Resultado | Descripción |
| :--- | :---: | :--- |
| **Performance** | **100/100** | Carga instantánea y ejecución eficiente. |
| **Accessibility** | **100/100** | Semántica HTML correcta y contraste adecuado. |
| **Best Practices** | **100/100** | HTTPS, optimización de imágenes y seguridad. |
| **SEO** | **100/100** | Metaetiquetas optimizadas y estructura indexable. |

### Optimizaciones Técnicas Implementadas

* **Zero-Runtime Icons:** Implementación de `unplugin-icons` para compilar iconos SVG directamente en el bundle de JavaScript, eliminando peticiones HTTP extra y descargas de fuentes pesadas.
* **App Shell Architecture:** CSS crítico inyectado en línea (`inline styles`) en el `index.html` para un *First Contentful Paint (FCP)* menor a 1 segundo.
* **Recursos Críticos:** Uso de `<link rel="preload">` y `fetchpriority="high"` para la imagen principal (LCP).
* **Gestión de Fuentes:** Eliminación de CDNs bloqueantes y uso de SVGs vectoriales nativos.
* **Layout Stability:** Eliminación total de saltos de contenido (CLS = 0) mediante dimensionamiento explícito de contenedores.

## Stack Tecnológico

* **Framework:** Vue.js 3 (Composition API & Script Setup)
* **Build Tool:** Vite (para un desarrollo y build ultrarrápidos)
* **Estilos:** Tailwind CSS (Diseño responsivo y utility-first)
* **Iconos:** Unplugin Icons + Iconify (Simple Icons & Devicon Logotypes)
* **Despliegue:** Vercel (CI/CD automático)

## Instalación y Uso Local

Si deseas correr este proyecto en tu máquina local para inspeccionar el código:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git](https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git)
    cd NOMBRE_DEL_REPO
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  **Generar versión de producción (Build):**
    ```bash
    npm run build
    ```

## Estructura del Proyecto
```
public
 ┣ assets
 ┃ ┣ img
 ┃ ┃ ┣ lessnd.webp
 ┃ ┃ ┣ project1.webp
 ┃ ┃ ┣ project2.webp
 ┃ ┃ ┗ project3.webp
 ┃ ┗ CV_FrontendDev_DavidRivera.pdf
 ┣ _redirects
 ┣ favicon.svg
 ┗ vite.svg
src
 ┣ components
 ┃ ┣ Contact.vue
 ┃ ┣ Experience.vue
 ┃ ┣ Hero.vue
 ┃ ┣ Navbar.vue
 ┃ ┣ Projects.vue
 ┃ ┗ Skills.vue
 ┣ App.vue
 ┣ main.js
 ┗ style.css
 ```
# Portafolio — Enrique González Boza

Portafolio personal de una página construido con React, TypeScript, Vite y Tailwind CSS.

## Stack

- **React 19** + **TypeScript**
- **Vite 7** (dev server + build)
- **Tailwind CSS 4** (vía `@tailwindcss/vite`)
- **GSAP** (animación del nombre con `SplitText` + `ScrollTrigger`)

## Comandos

```bash
pnpm install    # instalar dependencias
pnpm dev        # servidor de desarrollo
pnpm build      # build de producción (dist/)
pnpm preview    # previsualizar el build
pnpm lint       # ejecutar ESLint
```

## Estructura

```
src/
├── App.tsx               # Composición de la página
├── App.css               # Tailwind + fondo de cuadrícula + estilos base
├── data/
│   └── portfolio.ts      # ⭐ Todo el contenido editable (textos, skills, proyectos, redes)
├── components/
│   ├── Header.tsx        # Hero: foto, nombre animado, rol, CTAs
│   ├── Section.tsx       # Wrapper común de secciones (título + ancla)
│   ├── About.tsx         # Perfil profesional
│   ├── Skills.tsx        # Chips de tecnologías
│   ├── Projects.tsx      # Grid de tarjetas de proyecto
│   ├── Contact.tsx       # Email + redes sociales
│   ├── Footer.tsx        # Año dinámico + volver arriba
│   └── SplitText.tsx     # Animación de texto con GSAP
└── assets/               # Imágenes optimizadas (.webp)
    └── originals/        # Originales sin optimizar (no se publican)
```

## Personalizar el contenido

Edita **`src/data/portfolio.ts`**: nombre, rol, textos, habilidades,
proyectos (añade más objetos al array `projects`) y enlaces sociales.
No hace falta tocar los componentes.

> **Pendiente:** reemplaza el email (`tu-correo@ejemplo.com`) y las URLs
> de GitHub/LinkedIn (`tu-usuario`) por los tuyos.

## Imágenes

Las imágenes se importan desde `src/assets` (Vite les aplica hash y las
optimiza en el build). No uses rutas tipo `../public/...` ni strings de
`src/assets/...` directamente en `src=""`.

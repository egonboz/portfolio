import profilePicture from '../assets/profile-picture.webp'
import focusOnSteroids from '../assets/imgs/projects/focusonsteroids.webp'

// ─────────────────────────────────────────────────────────────
// Edita este archivo para personalizar el contenido del portafolio.
// Los textos, habilidades, proyectos y enlaces salen de aquí.
// ─────────────────────────────────────────────────────────────

export const personalInfo = {
  name: 'Enrique',
  fullName: 'Enrique González Boza',
  role: 'Ingeniero de Software FullStack',
  profilePicture,
  intro:
    'Desarrollo aplicaciones web de principio a fin: APIs robustas con Java y Spring Boot, e interfaces modernas con JavaScript y React. Me gusta escribir código limpio y aprender tecnologías nuevas.',
  // TODO: pon aquí tu correo real
  email: 'tu-correo@ejemplo.com',
}

export const aboutParagraphs = [
  'Soy ingeniero de software enfocado en el desarrollo fullstack de aplicaciones web. En el backend trabajo con Java y Spring Boot construyendo APIs REST, y en el frontend con JavaScript y React creando interfaces claras y fáciles de usar.',
  'Me interesa escribir código mantenible, entender el problema detrás de cada funcionalidad y seguir creciendo como desarrollador. Busco oportunidades donde pueda aportar y aprender en equipo.',
]

export const skills = ['Java', 'Spring Boot', 'JavaScript', 'React']

export interface Project {
  title: string
  description: string
  image: string
  link?: string
}

export const projects: Project[] = [
  {
    title: 'FocusOnSteroids',
    description:
      'Herramienta de apoyo a la concentración mediante la utilización de la técnica pomodoro, reproducción de música lofi y ruido blanco.',
    image: focusOnSteroids,
    // link: 'https://...',
  },
]

export interface Social {
  label: string
  url: string
  icon: 'github' | 'linkedin'
}

export const socials: Social[] = [
  // TODO: pon aquí tus URLs reales
  { label: 'GitHub', url: 'https://github.com/tu-usuario', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/tu-usuario', icon: 'linkedin' },
]

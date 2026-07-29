import profilePicture from '../assets/profile-picture.webp'
import focusOnSteroids from '../assets/imgs/projects/focusonsteroids.webp'

export const personalInfo = {
  name: 'Enrique',
  fullName: 'Enrique González Boza',
  role: 'Ingeniero de Software',
  profilePicture,
  intro:
    'Más de 4 años diseñando y desarrollando aplicaciones para sistemas complejos, con foco en backend, arquitectura de software y experiencia de usuario.',
  email: 'enrgonboz@gmail.com',
}

export const aboutParagraphs = [
  'Ingeniero de Software con más de 4 años de experiencia diseñando y desarrollando aplicaciones para sistemas complejos. Con experiencia en desarrollo backend, arquitectura de aplicaciones y diseño de software centrado en el usuario, con un fuerte compromiso por crear soluciones fiables, mantenibles e intuitivas.',
  'Experiencia trabajando con Java, Spring Boot, React, TypeScript y tecnologías modernas de desarrollo, participando en todas las fases del ciclo de vida del software: desde el diseño e implementación de nuevas funcionalidades hasta la optimización del rendimiento, la mentoría de desarrolladores junior y los despliegues con cliente en entornos operativos.',
  'Me motiva resolver problemas complejos de ingeniería sin perder de vista la experiencia del usuario, colaborando con equipos multidisciplinares y mejorando continuamente la calidad del software y los procesos de desarrollo.',
]

export interface Job {
  company: string
  role: string
  location: string
  period: string
  bullets: string[]
}

export const experience: Job[] = [
  {
    company: 'Indra Sistemas',
    role: 'Ingeniero de Software',
    location: 'Madrid, España',
    period: 'Julio 2023 - Actualidad',
    bullets: [
      'Diseño y desarrollo de nuevas funcionalidades backend para una aplicación de mando y control perteneciente a la solución anti drones (Counter-UAS) de Indra.',
      'Diseño e implementación de componentes backend escalables utilizando Java, Spring Boot y MongoDB.',
      'Diseño, desarrollo y mantenimiento de APIs REST para soportar flujos operativos complejos.',
      'Definición de la identidad visual de la aplicación, incluyendo iconografía, paletas de color, pantallas de carga y otros recursos gráficos.',
      'Liderazgo del rediseño de los principales flujos de trabajo de los operadores, simplificando la interacción con la aplicación y mejorando su usabilidad en un entorno de misión crítica.',
      'Refactorización de componentes existentes y optimización del rendimiento para mejorar la mantenibilidad y la capacidad de respuesta del sistema.',
      'Mentoría técnica a desarrolladores junior mediante revisiones de código y apoyo en el desarrollo.',
      'Participación en despliegues de software e integraciones con clientes en entornos operativos.',
      'Colaboración con equipos multidisciplinares durante todo el ciclo de desarrollo del software.',
    ],
  },
  {
    company: 'Secmotic',
    role: 'Full Stack Developer',
    location: 'Sevilla, España',
    period: 'Marzo 2022 – Febrero 2023',
    bullets: [
      'Desarrollo de nuevas funcionalidades para diferentes aplicaciones web utilizando React, TypeScript, Node.js y Express.',
      'Implantación de Figma como herramienta de diseño, mejorando la colaboración entre los equipos de desarrollo y diseño.',
      'Desarrollo de interfaces accesibles y adaptables.',
      'Implementación de entornos Docker y automatización de despliegues mediante GitHub Actions.',
      'Desarrollo de pruebas automatizadas con Jest para mejorar la calidad del software.',
      'Participación en todo el ciclo de desarrollo, desde el diseño UX/UI hasta la implementación frontend y backend.',
      'Colaboración en equipos Agile desarrollando soluciones para distintos clientes.',
    ],
  },
]

export interface SkillCategory {
  category: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Stack principal',
    items: ['Java', 'Spring Boot', 'React', 'TypeScript', 'MongoDB'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'REST APIs', 'SQL (PostgreSQL, MySQL)'],
  },
  {
    category: 'Frontend',
    items: ['Redux', 'Tailwind CSS'],
  },
  {
    category: 'Testing',
    items: ['JUnit', 'Mockito', 'Jest'],
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Jenkins', 'GitHub Actions', 'Gradle', 'Git'],
  },
  {
    category: 'Diseño',
    items: ['Figma', 'Design Systems', 'UX/UI', 'Accesibilidad'],
  },
]

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
    link: 'https://focusonsteroids.netlify.app/',
  },
]

export interface EducationEntry {
  title: string
  institution: string
  period: string
}

export const education: EducationEntry[] = [
  {
    title: 'Grado en Ingeniería Informática del Software',
    institution: 'Universidad de Sevilla',
    period: 'Septiembre 2016 - Octubre 2023',
  },
  {
    title: 'Beca Erasmus - Ingeniería del Software',
    institution: 'Krakow School of Banking and Management',
    period: 'Septiembre 2020 - Junio 2021',
  },
]

export const languages = [
  { name: 'Castellano', level: 'Nativo' },
  { name: 'Inglés', level: 'Nivel Profesional (Cambridge B2 First)' },
]

export interface Social {
  label: string
  url: string
  icon: 'github' | 'linkedin'
}

export const socials: Social[] = [
  // TODO: pon aquí tus URLs reales
  { label: 'GitHub', url: 'https://github.com/egonboz', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/enrique-gonz%C3%A1lez-boza/', icon: 'linkedin' },
]

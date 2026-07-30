export type Locale = 'es' | 'en'

export type Translations = {
  headerHello: string
  headerContact: string
  headerProjects: string
  headerScroll: string
  aboutTitle: string
  experienceTitle: string
  skillsTitle: string
  projectsTitle: string
  projectsView: string
  projectsCode: string
  educationTitle: string
  educationLanguages: string
  contactTitle: string
  contactIntro: string
  contactSocial: string
  footerBackToTop: string
  showMore: string
  showLess: string
}

const es: Translations = {
  headerHello: 'Hola, soy',
  headerContact: 'Contáctame',
  headerProjects: 'Mis Proyectos',
  headerScroll: 'Desplázate para ver más',
  aboutTitle: 'Perfil Profesional',
  experienceTitle: 'Experiencia Profesional',
  skillsTitle: 'Competencias Técnicas',
  projectsTitle: 'Proyectos',
  projectsView: 'Ver proyecto →',
  projectsCode: 'Código →',
  educationTitle: 'Educación e Idiomas',
  educationLanguages: 'Idiomas',
  contactTitle: 'Contáctame',
  contactIntro:
    'Si quieres contactarme, puedes hacerlo a través de los siguientes medios:',
  contactSocial: 'Mis Redes Sociales',
  footerBackToTop: 'Volver al inicio',
  showMore: 'Leer más',
  showLess: 'Mostrar menos',
}

const en: Translations = {
  headerHello: "Hello, I'm",
  headerContact: 'Contact Me',
  headerProjects: 'My Projects',
  headerScroll: 'Scroll for more',
  aboutTitle: 'Professional Profile',
  experienceTitle: 'Professional Experience',
  skillsTitle: 'Technical Skills',
  projectsTitle: 'Projects',
  projectsView: 'View project →',
  projectsCode: 'Code →',
  educationTitle: 'Education & Languages',
  educationLanguages: 'Languages',
  contactTitle: 'Contact Me',
  contactIntro:
    'If you want to get in touch, you can reach me through the following channels:',
  contactSocial: 'My Social Networks',
  footerBackToTop: 'Back to top',
  showMore: 'Read more',
  showLess: 'Show less',
}

export const ui: Record<Locale, Translations> = { es, en }

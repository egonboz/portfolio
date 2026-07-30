import profilePicture from '../assets/profile-picture.webp'
import focusOnSteroids from '../assets/imgs/projects/focusonsteroids.webp'
import portfolioImg from '../assets/imgs/projects/portfolio.webp'
import riftbound from '../assets/imgs/projects/riftbound.webp'
import type { Job, SkillCategory, Project, EducationEntry, LanguageEntry, Social } from './types'

export const personalInfo = {
  name: 'Enrique',
  fullName: 'Enrique González Boza',
  role: 'Software Engineer',
  profilePicture,
  intro:
    'Over 4 years designing and developing applications for complex systems, with a focus on backend, software architecture, and user experience.',
  email: 'enrgonboz@gmail.com',
}

export const aboutParagraphs = [
  'Software Engineer with over 4 years of experience designing and developing applications for complex systems. Experienced in backend development, application architecture, and user-centered software design, with a strong commitment to creating reliable, maintainable, and intuitive solutions.',
  'Experience working with Java, Spring Boot, React, TypeScript, and modern development technologies, participating in all phases of the software lifecycle: from designing and implementing new features to performance optimization, mentoring junior developers, and client deployments in operational environments.',
  'I am motivated by solving complex engineering problems without losing sight of the user experience, collaborating with multidisciplinary teams, and continuously improving software quality and development processes.',
]

export const experience: Job[] = [
  {
    company: 'Indra Sistemas',
    role: 'Software Engineer',
    location: 'Madrid, Spain',
    period: 'July 2023 - Present',
    bullets: [
      'Design and development of new backend features for a command and control application within Indra\'s Counter-UAS (anti-drone) solution.',
      'Design and implementation of scalable backend components using Java, Spring Boot, and MongoDB.',
      'Design, development, and maintenance of REST APIs to support complex operational workflows.',
      'Definition of the application\'s visual identity, including iconography, color palettes, loading screens, and other graphic resources.',
      'Led the redesign of core operator workflows, simplifying application interaction and improving usability in a mission-critical environment.',
      'Refactoring of existing components and performance optimization to improve system maintainability and responsiveness.',
      'Technical mentoring of junior developers through code reviews and development support.',
      'Participation in software deployments and client integrations in operational environments.',
      'Collaboration with multidisciplinary teams throughout the software development lifecycle.',
    ],
  },
  {
    company: 'Secmotic',
    role: 'Full Stack Developer',
    location: 'Seville, Spain',
    period: 'March 2022 – February 2023',
    bullets: [
      'Development of new features for various web applications using React, TypeScript, Node.js, and Express.',
      'Implementation of Figma as a design tool, improving collaboration between development and design teams.',
      'Development of accessible and responsive interfaces.',
      'Implementation of Docker environments and deployment automation using GitHub Actions.',
      'Development of automated tests with Jest to improve software quality.',
      'Participation in the full development cycle, from UX/UI design to frontend and backend implementation.',
      'Collaboration in Agile teams developing solutions for various clients.',
    ],
  },
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'Core Stack',
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
    category: 'Design',
    items: ['Figma', 'Design Systems', 'UX/UI', 'Accessibility'],
  },
]

export const projects: Project[] = [
  {
    title: 'FocusOnSteroids',
    description:
      'A focus-enhancing tool using the Pomodoro technique, with lofi music playback and white noise.',
    image: focusOnSteroids,
    link: 'https://focusonsteroids.netlify.app/',
    repo: 'https://github.com/egonboz/FocusOnSteroids',
  },
  {
    title: 'Personal Portfolio',
    description:
      'This very website: a single-page SPA built with React, TypeScript, Tailwind CSS, and GSAP animations. Automated deployment on GitHub Pages via GitHub Actions.',
    image: portfolioImg,
    link: 'https://egonboz.github.io/portfolio/',
    repo: 'https://github.com/egonboz/portfolio',
  },
  {
    title: 'Riftbound Tracker',
    description:
      'Tournament tracking application for the XPS Riftbound team — the League of Legends TCG: view official tournament rankings by event ID, with player stats and profiles. Mobile-first SPA built with React, TypeScript, and Tailwind CSS.',
    image: riftbound,
    repo: 'https://github.com/egonboz/xpsRiftboundApp',
    link: 'https://xpsriftboundtracker.netlify.app/?tournament=513747',
  },
]

export const education: EducationEntry[] = [
  {
    title: "Bachelor's Degree in Software Engineering",
    institution: 'University of Seville',
    period: 'September 2016 - October 2023',
  },
  {
    title: 'Erasmus Scholarship - Software Engineering',
    institution: 'Krakow School of Banking and Management',
    period: 'September 2020 - June 2021',
  },
]

export const languages: LanguageEntry[] = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Professional Proficiency (Cambridge B2 First)' },
]

export const socials: Social[] = [
  { label: 'GitHub', url: 'https://github.com/egonboz', icon: 'github' },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/enrique-gonz%C3%A1lez-boza/',
    icon: 'linkedin',
  },
]

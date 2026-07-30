import Section from './Section'
import Reveal from './Reveal'
import { useLanguage } from '../context/LanguageContext'
import type { Project } from '../data/types'

function ProjectCard({ project, lang }: { project: Project; lang: 'es' | 'en' }) {
  return (
    <article className="flex flex-col h-full bg-white border border-gray-300 rounded-2xl shadow-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
      <div className="overflow-hidden rounded-xl">
        <img
          className="w-full aspect-video object-cover transition-transform duration-300 hover:scale-105"
          src={project.image}
          alt={lang === 'es' ? `Captura de pantalla de ${project.title}` : `Screenshot of ${project.title}`}
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-bold mt-4">{project.title}</h3>
      <p className="text-sm font-light mt-2">{project.description}</p>
      {(project.link || project.repo) && (
        <div className="mt-3 flex gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-800 underline underline-offset-4 hover:text-black"
            >
              {lang === 'es' ? 'Ver proyecto →' : 'View project →'}
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-800 underline underline-offset-4 hover:text-black"
            >
              {lang === 'es' ? 'Código →' : 'Code →'}
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default function Projects() {
  const { t, data, lang } = useLanguage()
  const { projects } = data

  return (
    <Section id="projects" title={t.projectsTitle}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.1} className="h-full">
            <ProjectCard project={project} lang={lang} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

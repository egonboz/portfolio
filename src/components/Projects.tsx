import Section from './Section'
import Reveal from './Reveal'
import { projects, type Project } from '../data/portfolio'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col h-full bg-white border border-gray-300 rounded-2xl shadow-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
      <div className="overflow-hidden rounded-xl">
        <img
          className="w-full aspect-video object-cover transition-transform duration-300 hover:scale-105"
          src={project.image}
          alt={`Captura de pantalla de ${project.title}`}
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-bold mt-4">{project.title}</h3>
      <p className="text-sm font-light mt-2">{project.description}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-sm font-medium text-gray-800 underline underline-offset-4 hover:text-black"
        >
          Ver proyecto →
        </a>
      )}
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Proyectos">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.1} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

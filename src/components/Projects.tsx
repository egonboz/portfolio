import Section from './Section'
import { projects, type Project } from '../data/portfolio'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col bg-white border border-gray-300 rounded-2xl shadow-xl p-6">
      <img
        className="w-full rounded-xl aspect-video object-cover"
        src={project.image}
        alt={`Captura de pantalla de ${project.title}`}
        loading="lazy"
      />
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
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}

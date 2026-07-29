import Section from './Section'
import { experience, type Job } from '../data/portfolio'

function JobCard({ job }: { job: Job }) {
  return (
    <article className="bg-white border border-gray-300 rounded-2xl shadow-xl p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-bold">{job.role}</h3>
        <span className="text-xs font-medium text-gray-500">{job.period}</span>
      </div>
      <p className="text-sm font-medium text-gray-600 mt-0.5">
        {job.company} · {job.location}
      </p>
      <ul className="mt-3 flex flex-col gap-2">
        {job.bullets.map((bullet) => (
          <li key={bullet.slice(0, 40)} className="flex gap-2 text-sm font-light">
            <span
              aria-hidden="true"
              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"
            />
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Experience() {
  return (
    <Section id="experience" title="Experiencia Profesional">
      <div className="flex flex-col gap-4">
        {experience.map((job) => (
          <JobCard key={job.company} job={job} />
        ))}
      </div>
    </Section>
  )
}

import Section from './Section'
import Reveal from './Reveal'
import { useLanguage } from '../context/LanguageContext'
import type { Job } from '../data/types'

function JobCard({ job }: { job: Job }) {
  return (
    <article className="bg-white border border-gray-300 rounded-2xl shadow-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
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
  const { t, data } = useLanguage()
  const { experience } = data

  return (
    <Section id="experience" title={t.experienceTitle}>
      <div className="flex flex-col gap-4">
        {experience.map((job, index) => (
          <Reveal key={job.company} delay={index * 0.1}>
            <JobCard job={job} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

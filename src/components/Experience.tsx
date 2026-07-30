import { useState, useRef, useEffect } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import { useLanguage } from '../context/LanguageContext'
import type { Job } from '../data/types'

const BULLET_PREVIEW_COUNT = 3

function JobCard({ job, t }: { job: Job; t: { showMore: string; showLess: string } }) {
  const [expanded, setExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState('0px')

  const hasMore = job.bullets.length > BULLET_PREVIEW_COUNT
  const previewBullets = job.bullets.slice(0, BULLET_PREVIEW_COUNT)
  const hiddenBullets = job.bullets.slice(BULLET_PREVIEW_COUNT)

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(expanded ? `${contentRef.current.scrollHeight}px` : '0px')
    }
  }, [expanded, job.bullets])

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
        {previewBullets.map((bullet) => (
          <li key={bullet.slice(0, 40)} className="flex gap-2 text-sm font-light">
            <span
              aria-hidden="true"
              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"
            />
            {bullet}
          </li>
        ))}
      </ul>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight }}
      >
        <ul className="flex flex-col gap-2 mt-2">
          {hiddenBullets.map((bullet) => (
            <li key={bullet.slice(0, 40)} className="flex gap-2 text-sm font-light">
              <span
                aria-hidden="true"
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"
              />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-800 transition-colors"
        >
          <span>{expanded ? t.showLess : t.showMore}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      )}
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
            <JobCard job={job} t={t} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

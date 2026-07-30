import { useState, useRef, useEffect } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t, data } = useLanguage()
  const { aboutParagraphs } = data
  const [expanded, setExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState('0px')

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(expanded ? `${contentRef.current.scrollHeight}px` : '0px')
    }
  }, [expanded, aboutParagraphs])

  const preview = aboutParagraphs.slice(0, 1)
  const hidden = aboutParagraphs.slice(1)

  return (
    <Section id="about" title={t.aboutTitle}>
      <Reveal>
        <div className="bg-white border border-gray-300 rounded-2xl shadow-xl p-6 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
          {preview.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-sm text-left">
              {paragraph}
            </p>
          ))}
          <div
            ref={contentRef}
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight }}
          >
            <div className="flex flex-col gap-3">
              {hidden.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-sm text-left">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          {hidden.length > 0 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-800 transition-colors self-start"
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
        </div>
      </Reveal>
    </Section>
  )
}

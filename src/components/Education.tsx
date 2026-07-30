import Section from './Section'
import Reveal from './Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function Education() {
  const { t, data } = useLanguage()
  const { education, languages } = data

  return (
    <Section id="education" title={t.educationTitle}>
      <div className="flex flex-col gap-4">
        {education.map((entry, index) => (
          <Reveal key={entry.title} delay={index * 0.1}>
            <article className="bg-white border border-gray-300 rounded-2xl shadow-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-bold">{entry.title}</h3>
                <span className="text-xs font-medium text-gray-500">
                  {entry.period}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-600 mt-0.5">
                {entry.institution}
              </p>
            </article>
          </Reveal>
        ))}
        <Reveal delay={education.length * 0.1}>
          <div className="bg-white border border-gray-300 rounded-2xl shadow-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
            <h3 className="text-base font-bold mb-2">{t.educationLanguages}</h3>
            <ul className="flex flex-col gap-1">
              {languages.map((lang) => (
                <li key={lang.name} className="text-sm">
                  <span className="font-medium">{lang.name}</span>
                  <span className="font-light"> — {lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

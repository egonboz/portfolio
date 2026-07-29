import Section from './Section'
import { education, languages } from '../data/portfolio'

export default function Education() {
  return (
    <Section id="education" title="Educación e Idiomas">
      <div className="flex flex-col gap-4">
        {education.map((entry) => (
          <article
            key={entry.title}
            className="bg-white border border-gray-300 rounded-2xl shadow-xl p-6"
          >
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
        ))}
        <div className="bg-white border border-gray-300 rounded-2xl shadow-xl p-6">
          <h3 className="text-base font-bold mb-2">Idiomas</h3>
          <ul className="flex flex-col gap-1">
            {languages.map((lang) => (
              <li key={lang.name} className="text-sm">
                <span className="font-medium">{lang.name}</span>
                <span className="font-light"> — {lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

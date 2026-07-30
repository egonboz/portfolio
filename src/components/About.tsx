import Section from './Section'
import Reveal from './Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t, data } = useLanguage()
  const { aboutParagraphs } = data

  return (
    <Section id="about" title={t.aboutTitle}>
      <Reveal>
        <div className="bg-white border border-gray-300 rounded-2xl shadow-xl p-6 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-sm text-left">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}

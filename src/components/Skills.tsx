import Section from './Section'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <Section id="skills" title="Tecnologías">
      <ul className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <li
            key={skill}
            className="px-4 py-1.5 bg-zinc-300 rounded-2xl text-xs font-normal"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  )
}

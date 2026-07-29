import Section from './Section'
import { skillCategories } from '../data/portfolio'

export default function Skills() {
  return (
    <Section id="skills" title="Competencias Técnicas">
      <div className="bg-white border border-gray-300 rounded-2xl shadow-xl p-6 flex flex-col gap-4">
        {skillCategories.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-semibold mb-2">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1 bg-zinc-300 rounded-2xl text-xs font-normal"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

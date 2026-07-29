import type { CSSProperties } from 'react'
import Section from './Section'
import Reveal from './Reveal'
import { skillCategories } from '../data/portfolio'

function ChipRow({ items, hidden = false }: { items: string[]; hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex w-max items-center gap-2.5 pr-2.5 ${hidden ? 'motion-reduce:hidden' : ''}`}
    >
      {items.map((item) => (
        <li
          key={item}
          className="px-4 py-1.5 bg-zinc-300 rounded-2xl text-xs font-normal whitespace-nowrap transition-colors duration-200 hover:bg-zinc-400 cursor-default"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

function Marquee({
  items,
  reverse = false,
  duration = '30s',
}: {
  items: string[]
  reverse?: boolean
  duration?: string
}) {
  return (
    <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[mask-image:none]">
      <div
        className={`marquee-track flex w-max ${reverse ? 'reverse' : ''}`}
        style={{ '--marquee-duration': duration } as CSSProperties}
      >
        <ChipRow items={items} />
        {/* Copia duplicada para el bucle infinito */}
        <ChipRow items={items} hidden />
      </div>
    </div>
  )
}

export default function Skills() {
  const rowA = skillCategories.slice(0, 3).flatMap((group) => group.items)
  const rowB = skillCategories.slice(3).flatMap((group) => group.items)

  return (
    <Section id="skills" title="Competencias Técnicas">
      <Reveal>
        <div className="flex flex-col gap-2.5 py-1">
          <Marquee items={rowA} duration="32s" />
          <Marquee items={rowB} reverse duration="40s" />
        </div>
      </Reveal>
    </Section>
  )
}

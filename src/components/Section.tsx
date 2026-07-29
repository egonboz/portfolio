import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-6">
      <Reveal>
        <h2 className="text-lg font-bold mb-3">{title}</h2>
      </Reveal>
      {children}
    </section>
  )
}

import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-6">
      <h2 className="text-lg font-bold mb-3">{title}</h2>
      {children}
    </section>
  )
}

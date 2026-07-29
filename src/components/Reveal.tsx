import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealProps {
  children: ReactNode
  className?: string
  /** Retraso en segundos (para efectos escalonados) */
  delay?: number
  /** Desplazamiento vertical inicial en píxeles */
  y?: number
}

/**
 * Anima su contenido al entrar en el viewport (fade + slide up).
 * Respeta `prefers-reduced-motion`: sin animación el contenido se muestra directamente.
 */
export default function Reveal({ children, className = '', delay = 0, y = 24 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(el, {
        opacity: 0,
        y,
        duration: 0.6,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true,
        },
      })
    })

    return () => mm.revert()
  }, [delay, y])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

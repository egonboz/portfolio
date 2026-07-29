import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { personalInfo } from '../data/portfolio'
import SplitText from './SplitText'

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const q = gsap.utils.selector(headerRef)
      gsap.from(q('[data-hero]'), {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.12,
      })
    })
    return () => mm.revert()
  }, [])

  return (
    <header
      ref={headerRef}
      className="relative z-10 flex flex-col items-center text-center px-4 pt-10"
    >
      <div
        data-hero
        className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-2xl ring-4 ring-white"
      >
        <img
          className="w-full h-full object-cover"
          src={personalInfo.profilePicture}
          alt={`Foto de ${personalInfo.fullName}`}
          width={384}
          height={384}
        />
      </div>
      <p data-hero className="mt-6 text-base">Hola, soy</p>
      <SplitText
        as="h1"
        text={personalInfo.name}
        className="text-4xl sm:text-5xl font-bold"
        textAlign="center"
        splitType="chars"
        delay={90}
        duration={0.5}
      />
      <p data-hero className="text-sm font-light text-gray-600">{personalInfo.role}</p>
      <p data-hero className="mt-4 max-w-xl text-sm sm:text-base">{personalInfo.intro}</p>
      <div data-hero className="mt-6 flex gap-3">
        <a
          href="#contact"
          className="bg-gray-800 text-white text-sm px-5 py-2 rounded-2xl hover:bg-gray-700 transition-colors"
        >
          Contáctame
        </a>
        <a
          href="#projects"
          className="bg-gray-400 text-white text-sm px-5 py-2 rounded-2xl hover:bg-gray-500 transition-colors"
        >
          Mis Proyectos
        </a>
      </div>
      <a
        href="#about"
        aria-label="Desplázate para ver más"
        className="mt-10 animate-bounce text-gray-500 hover:text-gray-800 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </header>
  )
}

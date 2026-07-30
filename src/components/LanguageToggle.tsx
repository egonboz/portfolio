import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  const ref = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(ref.current, {
        opacity: 0,
        y: -8,
        duration: 0.5,
        ease: 'power3.out',
        delay: 0.6,
      })
    })
    return () => mm.revert()
  }, [])

  const isEnglish = lang === 'en'

  return (
    <button
      ref={ref}
      onClick={() => setLang(isEnglish ? 'es' : 'en')}
      className="relative z-20 flex items-center bg-gray-200 rounded-full p-0.5 w-[4.25rem] h-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 cursor-pointer"
      aria-label={`Switch to ${isEnglish ? 'Spanish' : 'English'}`}
    >
      <span
        className={`absolute top-0.5 h-7 w-[1.95rem] rounded-full bg-gray-800 shadow-sm transition-transform duration-300 ease-out ${
          isEnglish ? 'translate-x-[2.05rem]' : 'translate-x-0'
        }`}
      />
      <span
        className={`relative z-10 flex-1 text-xs font-medium text-center transition-colors duration-300 ${
          !isEnglish ? 'text-white' : 'text-gray-600'
        }`}
      >
        ES
      </span>
      <span
        className={`relative z-10 flex-1 text-xs font-medium text-center transition-colors duration-300 ${
          isEnglish ? 'text-white' : 'text-gray-600'
        }`}
      >
        EN
      </span>
    </button>
  )
}

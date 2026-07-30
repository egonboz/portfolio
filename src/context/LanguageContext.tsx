/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { type Locale, ui, type Translations } from '../i18n/translations'
import * as dataEs from '../data/portfolio'
import * as dataEn from '../data/portfolio.en'
import type { PortfolioData } from '../data/types'

function getData(lang: Locale): PortfolioData {
  return lang === 'es' ? (dataEs as unknown as PortfolioData) : (dataEn as unknown as PortfolioData)
}

interface LanguageContextValue {
  lang: Locale
  setLang: (lang: Locale) => void
  t: Translations
  data: PortfolioData
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'es'
  const stored = localStorage.getItem('lang') as Locale | null
  if (stored === 'es' || stored === 'en') return stored
  const browserLang = navigator.language.split('-')[0]
  return browserLang === 'en' ? 'en' : 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Locale>(detectLocale)

  const value: LanguageContextValue = {
    lang,
    setLang: useCallback((newLang: Locale) => {
      setLang(newLang)
      localStorage.setItem('lang', newLang)
      document.documentElement.lang = newLang
    }, []),
    t: ui[lang],
    data: getData(lang),
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

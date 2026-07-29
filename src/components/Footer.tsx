import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 mx-auto w-full max-w-3xl px-4 pb-8">
      <hr className="my-6 border-gray-300" />
      <div className="flex items-center justify-between">
        <p className="text-sm font-light text-gray-500">
          {personalInfo.fullName} {year} &copy;
        </p>
        <a
          href="#top"
          aria-label="Volver al inicio"
          className="text-gray-500 hover:text-gray-900 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
          </svg>
        </a>
      </div>
    </footer>
  )
}

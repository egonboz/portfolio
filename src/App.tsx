import './App.css'
import LanguageToggle from './components/LanguageToggle'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-gray-800">
      <div aria-hidden="true" className="bg-grid" />
      <div className="fixed top-4 right-4 z-30">
        <LanguageToggle />
      </div>
      <Header />
      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 py-10">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

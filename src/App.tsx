import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-gray-800">
      <div aria-hidden="true" className="bg-grid" />
      <Header />
      <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 py-10">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

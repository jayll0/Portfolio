import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import { navItems, profile } from './data/cv'

const App = () => {
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    // rootMargin offsets the fixed navbar; the topmost visible section wins
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-60px 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="shell flex flex-col gap-2 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Built with React, Vite, and Tailwind CSS</p>
        </div>
      </footer>
    </>
  )
}

export default App

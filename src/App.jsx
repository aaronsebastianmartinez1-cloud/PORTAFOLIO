import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Weeks from './components/Weeks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'
import DNI from './components/DNI'
import Asistente from './components/Asistente'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Weeks />
        <DNI />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
      <Asistente />
    </>
  )
}

export default App
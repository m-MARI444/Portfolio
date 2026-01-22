import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </div>
  )
}

export default App

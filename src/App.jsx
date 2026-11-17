import { useEffect } from 'react'
import { MotionConfig, useReducedMotion } from 'framer-motion'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import './index.css'

function App() {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      anchors: { offset: -96 },
      infinite: false,
    })

    let animationFrame
    function raf(time) {
      lenis.raf(time)
      animationFrame = requestAnimationFrame(raf)
    }

    animationFrame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrame)
      lenis.destroy()
    }
  }, [reducedMotion])

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-container">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <Hero />
        <main id="main-content" tabIndex={-1}>
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  )
}

export default App

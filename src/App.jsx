import React, { useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import ParticleCanvas from './components/ParticleCanvas'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { useAOS } from './hooks/useAOS'

function App() {
  useAOS()

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <ParticleCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App

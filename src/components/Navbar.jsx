import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#certifications', label: 'Sertifikasi' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
      // Active nav update
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 100) current = section.id
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on outside click
  useEffect(() => {
    function onClickOutside(e) {
      if (menuOpen && !e.target.closest('#navbar')) {
        setMenuOpen(false)
        document.body.style.overflow = ''
      }
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [menuOpen])

  function toggleMenu() {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  function handleNavClick(e, href) {
    e.preventDefault()
    setMenuOpen(false)
    document.body.style.overflow = ''
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav id="navbar" className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo} onClick={e => handleNavClick(e, '#home')}>
          Abi<span>Rian</span>
        </a>
        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`${styles.link} ${activeSection === item.href.slice(1) ? styles.active : ''}`}
                onClick={e => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`${styles.toggle} ${menuOpen ? styles.toggleActive : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}

import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const WORDS = ['Mekanik Otomotif', 'IT Enthusiast', 'Frontend Developer', 'ESP32 Engineer', 'Problem Solver']

export default function Hero() {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const speed = { type: 100, delete: 55, pause: 2000, pauseShort: 400 }
    const word = WORDS[wordIndex]

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = charIndex + 1
        setText(word.slice(0, next))
        if (next === word.length) {
          setTimeout(() => setDeleting(true), speed.pause)
        } else {
          setCharIndex(next)
        }
      } else {
        const next = charIndex - 1
        setText(word.slice(0, next))
        if (next === 0) {
          setDeleting(false)
          setWordIndex(i => (i + 1) % WORDS.length)
          setCharIndex(0)
        } else {
          setCharIndex(next)
        }
      }
    }, deleting ? speed.delete : speed.type)

    return () => clearTimeout(timer)
  }, [text, wordIndex, charIndex, deleting])

  function handleDownloadCV(e) {
    e.preventDefault()
    alert('CV akan tersedia segera. Silakan hubungi via email: abirian755@gmail.com')
  }

  function scrollTo(href) {
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className={styles.hero}>
      {/* Video Background */}
      <div className={styles.videoBg}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
        >
          <source src="/3.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.imageWrapper} data-aos="fade-right">
          <div className={styles.avatar}>
            <div className={styles.placeholder}>AR</div>
            <div className={`${styles.ring} ${styles.ring1}`}></div>
            <div className={`${styles.ring} ${styles.ring2}`}></div>
          </div>
        </div>
        <div className={styles.text} data-aos="fade-left">
          <p className={styles.greeting}>Halo, Saya</p>
          <h1 className={styles.name}>Abi Rian <span className="accent">Ana Bawi</span></h1>
          <div className={styles.typingWrapper}>
            <span className={styles.typingPrefix}>Seorang </span>
            <span className={styles.typingText}>{text}</span>
            <span className={styles.cursor}>|</span>
          </div>
          <p className={styles.tagline}>
            "Menggabungkan Dunia Otomotif dan Teknologi<br />
            untuk Menciptakan Solusi Inovatif"
          </p>
          <div className={styles.location}>
            <span className={styles.iconLoc}>●</span> Kabupaten Blitar, Jawa Timur
          </div>
          <div className={styles.buttons}>
            <a href="#" className="btn btn-primary" onClick={handleDownloadCV}>↓ Download CV</a>
            <a href="#contact" className="btn btn-outline" onClick={e => { e.preventDefault(); scrollTo('#contact') }}>Hubungi Saya</a>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot}></div>
      </div>
    </section>
  )
}

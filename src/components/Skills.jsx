import React, { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'

const AUTOMOTIVE = [
  { name: 'Mesin Diesel', pct: 90 },
  { name: 'Mesin Bensin', pct: 88 },
  { name: 'Otomotif Umum', pct: 85 },
  { name: 'ESP32 Otomotif', pct: 75 },
]
const IT = [
  { name: 'HTML', pct: 80 },
  { name: 'CSS', pct: 75 },
  { name: 'Dasar AI', pct: 60 },
  { name: 'Database Dasar', pct: 60 },
]
const SOFT = ['Problem Solving', 'Team Work', 'Komunikasi', 'Analisis', 'Kerja Tim', 'Adaptif']

function SkillBar({ name, pct }) {
  const [width, setWidth] = useState(0)
  const triggered = useRef(false)
  const ref = useRef(null)

  useEffect(() => {
    function check() {
      if (triggered.current || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.9) {
        triggered.current = true
        setTimeout(() => setWidth(pct), 100)
      }
    }
    window.addEventListener('scroll', check, { passive: true })
    check()
    return () => window.removeEventListener('scroll', check)
  }, [pct])

  return (
    <div className={styles.skillItem} ref={ref}>
      <div className={styles.skillInfo}><span>{name}</span><span>{pct}%</span></div>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${width}%` }}></div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Keahlian <span className="accent">Saya</span></h2>
          <div className="section-line"></div>
        </div>
        <div className={styles.grid}>
          <div data-aos="fade-right">
            <h3 className={styles.cat}>🔧 Otomotif</h3>
            {AUTOMOTIVE.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
          <div data-aos="fade-left">
            <h3 className={styles.cat}>💻 Teknologi & IT</h3>
            {IT.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
          <div data-aos="fade-up">
            <h3 className={styles.cat}>🤝 Soft Skills</h3>
            <div className={styles.badges}>
              {SOFT.map(s => <span key={s} className={styles.badge}>{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

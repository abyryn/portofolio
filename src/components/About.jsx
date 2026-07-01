import React, { useEffect, useRef, useState } from 'react'
import styles from './About.module.css'

const STATS = [
  { count: 2, label: 'Tahun Pengalaman' },
  { count: 5, label: 'Sertifikat' },
  { count: 10, label: 'Keahlian' },
  { count: 1, label: 'Project Unggulan' },
]

function StatCard({ count, label }) {
  const [num, setNum] = useState(0)
  const triggered = useRef(false)
  const ref = useRef(null)

  useEffect(() => {
    function check() {
      if (triggered.current) return
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.85) {
        triggered.current = true
        let current = 0
        const step = Math.ceil(count / 50)
        const interval = setInterval(() => {
          current = Math.min(current + step, count)
          setNum(current)
          if (current >= count) clearInterval(interval)
        }, 40)
      }
    }
    window.addEventListener('scroll', check, { passive: true })
    check()
    return () => window.removeEventListener('scroll', check)
  }, [count])

  return (
    <div className={styles.statCard} ref={ref}>
      <span className={styles.statNum}>{num}</span>
      <span className={styles.statPlus}>+</span>
      <div className={styles.statLabel}>{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Tentang <span className="accent">Saya</span></h2>
          <div className="section-line"></div>
        </div>
        <div className={styles.grid}>
          <div className={styles.text} data-aos="fade-right">
            <p>Lulusan <strong>Teknik Otomotif</strong> dengan minat dalam pemeliharaan mesin serta pengembangan teknologi informasi. Memiliki kemampuan problem solving, analisis, komunikasi, dan kerja tim yang baik.</p>
            <p>Menguasai <strong>HTML, CSS</strong>, serta memiliki pengalaman membuat project berbasis <strong>ESP32</strong> untuk otomotif. Siap berkontribusi dalam bidang teknologi dan inovasi.</p>
            <div className={styles.infoGrid}>
              {[
                { label: 'Lokasi', value: 'Kabupaten Blitar, Jawa Timur' },
                { label: 'Email', value: 'abirian755@gmail.com', href: 'mailto:abirian755@gmail.com' },
                { label: 'Telepon', value: '085656209392', href: 'tel:085656209392' },
                { label: 'Website', value: 'abirian.my.id', href: 'https://abirian.my.id', external: true },
                { label: 'Pendidikan', value: 'SMKN 1 Kademangan - Teknik Otomotif' },
              ].map(item => (
                <div key={item.label} className={styles.infoItem}>
                  <span className={styles.infoLabel}>{item.label}</span>
                  {item.href
                    ? <a href={item.href} className={styles.infoLink} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined}>{item.value}</a>
                    : <span className={styles.infoValue}>{item.value}</span>
                  }
                </div>
              ))}
            </div>
          </div>
          <div className={styles.stats} data-aos="fade-left">
            {STATS.map(s => <StatCard key={s.label} {...s} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

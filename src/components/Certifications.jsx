import React from 'react'
import styles from './Certifications.module.css'

const CERTS = [
  { icon: '🏆', name: 'Sertifikat Kompetensi Electrical Junior Technician', badge: 'Kompetensi', delay: 0 },
  { icon: '🧠', name: 'Dicoding Belajar Dasar AI', badge: 'Dicoding', delay: 100 },
  { icon: '💻', name: 'Komdigi Konsep Pemrograman', badge: 'Komdigi', delay: 200 },
  { icon: '📈', name: 'Webinar Dasar Basis Data', badge: 'Webinar', delay: 300 },
  { icon: '🔧', name: 'Praktik Kerja Lapangan PT Sun Star Motor', badge: 'PKL', delay: 400 },
]

export default function Certifications() {
  return (
    <section id="certifications" className={`section ${styles.certs}`}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Sertifikasi <span className="accent">&amp; Lisensi</span></h2>
          <div className="section-line"></div>
        </div>
        <div className={styles.grid}>
          {CERTS.map(c => (
            <div key={c.name} className={styles.card} data-aos="fade-up" data-aos-delay={c.delay.toString()}>
              <span className={styles.icon}>{c.icon}</span>
              <p className={styles.name}>{c.name}</p>
              <span className={styles.badge}>{c.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

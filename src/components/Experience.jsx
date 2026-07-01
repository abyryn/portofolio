import React from 'react'
import styles from './Experience.module.css'

const EXPERIENCES = [
  {
    company: 'PT Astra International Tbk',
    sub: 'Honda Sales Operation',
    badge: 'Saat Ini',
    badgeType: 'current',
    position: 'Mekanik',
    period: '📅 Desember 2025 — Sekarang',
    desc: [
      'Menangani service kendaraan roda dua.',
      'Menyelesaikan keluhan pelanggan dengan komunikasi yang baik.',
      'Berpartisipasi dalam kegiatan dealer dan perawatan lingkungan kerja.',
      'Memberikan pelayanan yang memuaskan kepada pelanggan.',
    ],
    aos: 'fade-right',
  },
  {
    company: 'PT Sun Star Motor Mitsubishi',
    sub: 'Kediri',
    badge: 'Magang',
    badgeType: 'internship',
    position: 'Mekanik Magang',
    period: '📅 Juli 2024 — Desember 2024',
    desc: [
      'Membantu proses service kendaraan.',
      'Berkontribusi meningkatkan efisiensi pengerjaan hingga 15%.',
      'Membantu tugas teknisi dan pengelolaan alat bengkel.',
      'Menjalankan pekerjaan sesuai Work Order.',
    ],
    aos: 'fade-left',
  },
]

export default function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Pengalaman <span className="accent">Kerja</span></h2>
          <div className="section-line"></div>
        </div>
        <div className={styles.timeline}>
          {EXPERIENCES.map(exp => (
            <div key={exp.company} className={styles.item} data-aos={exp.aos}>
              <div className={styles.dot}></div>
              <div className={styles.card}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.company}>{exp.company}</h3>
                    <p className={styles.sub}>{exp.sub}</p>
                  </div>
                  <div className={`${styles.badge} ${styles[exp.badgeType]}`}>{exp.badge}</div>
                </div>
                <p className={styles.position}>{exp.position}</p>
                <p className={styles.period}>{exp.period}</p>
                <ul className={styles.desc}>
                  {exp.desc.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

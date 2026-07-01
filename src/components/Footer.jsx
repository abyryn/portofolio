import React from 'react'
import styles from './Footer.module.css'

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#home" className={styles.logo} onClick={e => { e.preventDefault(); scrollTo('#home') }}>
              Abi<span>Rian</span>
            </a>
            <p>Mekanik Otomotif &amp; IT Enthusiast<br />Frontend Developer</p>
          </div>
          <div className={styles.linksCol}>
            <h4>Navigasi</h4>
            <ul>
              {[['#home','Home'],['#about','About'],['#experience','Experience'],['#skills','Skills']].map(([href, label]) => (
                <li key={href}><a href={href} onClick={e => { e.preventDefault(); scrollTo(href) }}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div className={styles.linksCol}>
            <h4>Lainnya</h4>
            <ul>
              {[['#portfolio','Portfolio'],['#certifications','Sertifikasi'],['#contact','Contact']].map(([href, label]) => (
                <li key={href}><a href={href} onClick={e => { e.preventDefault(); scrollTo(href) }}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div className={styles.socialCol}>
            <h4>Sosial Media</h4>
            <div className={styles.socials}>
              <a href="https://abirian.my.id" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Website">🌐</a>
              <a href="mailto:abirian755@gmail.com" className={styles.socialIcon} aria-label="Email">📧</a>
              <a href="tel:085656209392" className={styles.socialIcon} aria-label="Phone">📞</a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; 2026 Abi Rian Ana Bawi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import React, { useEffect } from 'react'
import styles from './ModalAI.module.css'

export default function ModalAI({ isOpen, onClose, onDemo }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={`modal-box ${styles.box}`}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className={styles.header}>
          <div className={styles.iconWrap}>🧠</div>
          <div>
            <div className={styles.aiBadge}>● AI Project</div>
            <h2 className="modal-title">Customer Service AI — <span className="accent">AutoBot</span></h2>
          </div>
        </div>
        <div className="modal-tags">
          <span className="tag tag--ai">Artificial Intelligence</span>
          <span className="tag tag--ai">NLP</span>
          <span className="tag tag--ai">Chatbot</span>
          <span className="tag tag--ai">Otomotif</span>
        </div>
        <p className="modal-desc">
          AutoBot adalah sistem Customer Service berbasis AI yang dirancang khusus untuk industri otomotif. Menggabungkan Natural Language Processing (NLP) dengan database pengetahuan teknis kendaraan untuk memberikan jawaban akurat dan responsif kepada pelanggan.
        </p>
        <div className={styles.featureGrid}>
          {[
            { icon: '🧠', title: 'AI-Powered', desc: 'Pemrosesan bahasa alami untuk memahami pertanyaan pelanggan' },
            { icon: '📈', title: 'Booking Otomatis', desc: 'Jadwal service kendaraan langsung via chat' },
            { icon: '🔒', title: 'Aman & Privat', desc: 'Data pelanggan terenkripsi dan aman' },
            { icon: '🌐', title: 'Multi-Platform', desc: 'Web, WhatsApp, dan mobile ready' },
          ].map(f => (
            <div key={f.title} className={styles.feature}>
              <span className={styles.fIcon}>{f.icon}</span>
              <div><strong>{f.title}</strong><p>{f.desc}</p></div>
            </div>
          ))}
        </div>
        <div className={styles.techStack}>
          {['Python', 'NLP', 'REST API', 'HTML/CSS', 'JavaScript', 'SQLite'].map(t => (
            <span key={t} className={styles.pill}>{t}</span>
          ))}
        </div>
        <button className="btn btn-primary btn-full" style={{ marginTop: '20px' }} onClick={() => { onClose(); onDemo() }}>
          ▶ Coba Demo Interaktif
        </button>
      </div>
    </div>
  )
}

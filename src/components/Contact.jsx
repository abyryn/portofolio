import React, { useState } from 'react'
import styles from './Contact.module.css'

const CONTACT_ITEMS = [
  { icon: '📧', label: 'Email', value: 'abirian755@gmail.com', href: 'mailto:abirian755@gmail.com' },
  { icon: '📞', label: 'Telepon', value: '085656209392', href: 'tel:085656209392' },
  { icon: '🌐', label: 'Website', value: 'abirian.my.id', href: 'https://abirian.my.id', external: true },
  { icon: '📍', label: 'Lokasi', value: 'Kabupaten Blitar, Jawa Timur' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'success' | 'sending' | null

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(null), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Hubungi <span className="accent">Saya</span></h2>
          <div className="section-line"></div>
        </div>
        <div className={styles.grid}>
          <div className={styles.info} data-aos="fade-right">
            <h3>Mari Berkolaborasi!</h3>
            <p>Saya terbuka untuk peluang kerja, kolaborasi project, atau sekadar berdiskusi tentang teknologi dan otomotif.</p>
            <div className={styles.items}>
              {CONTACT_ITEMS.map(item => (
                item.href
                  ? <a key={item.label} href={item.href} className={styles.item} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined}>
                      <div className={styles.itemIcon}>{item.icon}</div>
                      <div>
                        <p className={styles.itemLabel}>{item.label}</p>
                        <p className={styles.itemValue}>{item.value}</p>
                      </div>
                    </a>
                  : <div key={item.label} className={styles.item}>
                      <div className={styles.itemIcon}>{item.icon}</div>
                      <div>
                        <p className={styles.itemLabel}>{item.label}</p>
                        <p className={styles.itemValue}>{item.value}</p>
                      </div>
                    </div>
              ))}
            </div>
          </div>
          <div className={styles.formWrapper} data-aos="fade-left">
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nama Lengkap</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Masukkan nama Anda" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="email@contoh.com" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subjek</label>
                <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Perihal pesan" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Pesan</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Tuliskan pesan Anda..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full" disabled={status === 'sending'}>
                {status === 'sending' ? '⏳ Mengirim...' : '📨 Kirim Pesan'}
              </button>
              {status === 'success' && (
                <div className={styles.statusSuccess}>✅ Pesan berhasil dikirim! Saya akan merespons segera.</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import styles from './Portfolio.module.css'
import ModalECU from './ModalECU'
import ModalAI from './ModalAI'
import ChatbotDemo from './ChatbotDemo'

export default function Portfolio() {
  const [modal, setModal] = useState(null) // 'ecu' | 'ai' | 'demo' | null

  return (
    <section id="portfolio" className={`section ${styles.portfolio}`}>
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Project <span className="accent">Unggulan</span></h2>
          <div className="section-line"></div>
        </div>
        <div className={styles.grid}>

          {/* Card ESP32 */}
          <div className={styles.card} data-aos="zoom-in" data-aos-delay="0">
            <div className={styles.cardInner}>
              <div className={styles.icon}>⚡</div>
              <div className={styles.body}>
                <div className={styles.tags}>
                  <span className="tag">ESP32</span>
                  <span className="tag">Otomotif</span>
                  <span className="tag">IT</span>
                </div>
                <h3 className={styles.title}>Remap ECU Motor Berbasis ESP32</h3>
                <p className={styles.desc}>Project yang menggabungkan kemampuan otomotif dan IT untuk melakukan remapping ECU menggunakan mikrokontroler ESP32. Inovasi nyata di bidang otomotif modern.</p>
                <div className={styles.footer}>
                  <button className="btn btn-sm btn-outline" onClick={() => setModal('ecu')}>🔍 Detail Project</button>
                </div>
              </div>
            </div>
          </div>

          {/* Card AI */}
          <div className={`${styles.card} ${styles.cardAI}`} data-aos="zoom-in" data-aos-delay="150">
            <div className={styles.cardInner}>
              <div className={`${styles.icon} ${styles.aiIcon}`}>
                <div className={styles.aiBrain}>
                  <span className={`${styles.dot} ${styles.d1}`}></span>
                  <span className={`${styles.dot} ${styles.d2}`}></span>
                  <span className={`${styles.dot} ${styles.d3}`}></span>
                  🧠
                </div>
              </div>
              <div className={styles.body}>
                <div className={styles.tags}>
                  <span className="tag tag--ai">AI</span>
                  <span className="tag tag--ai">Chatbot</span>
                  <span className="tag tag--ai">NLP</span>
                  <span className="tag tag--ai">Customer Service</span>
                </div>
                <div className={styles.liveBadge}>● Live Demo Concept</div>
                <h3 className={styles.title}>Customer Service AI <span className="accent">— AutoBot</span></h3>
                <p className={styles.desc}>Asisten virtual cerdas berbasis AI untuk industri otomotif. Mampu menjawab pertanyaan teknis kendaraan, booking service, dan menangani keluhan pelanggan secara otomatis 24/7.</p>
                <div className={styles.miniStats}>
                  <div className={styles.miniStat}><span className={styles.miniVal}>24/7</span><span className={styles.miniLbl}>Aktif</span></div>
                  <div className={styles.miniStat}><span className={styles.miniVal}>~98%</span><span className={styles.miniLbl}>Akurasi</span></div>
                  <div className={styles.miniStat}><span className={styles.miniVal}>&lt;1s</span><span className={styles.miniLbl}>Respons</span></div>
                </div>
                <div className={styles.footer}>
                  <button className="btn btn-sm btn-primary" onClick={() => setModal('ai')}>🧠 Lihat Detail</button>
                  <button className="btn btn-sm btn-outline" onClick={() => setModal('demo')}>▶ Demo</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ModalECU isOpen={modal === 'ecu'} onClose={() => setModal(null)} />
      <ModalAI isOpen={modal === 'ai'} onClose={() => setModal(null)} onDemo={() => setModal('demo')} />
      <ChatbotDemo isOpen={modal === 'demo'} onClose={() => setModal(null)} />
    </section>
  )
}

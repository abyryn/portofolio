import React, { useEffect } from 'react'

export default function ModalECU({ isOpen, onClose }) {
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

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={handleOverlayClick}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-icon">⚡</div>
        <h2 className="modal-title">Remap ECU Motor Berbasis ESP32</h2>
        <div className="modal-tags">
          <span className="tag">ESP32</span>
          <span className="tag">Otomotif</span>
          <span className="tag">IoT</span>
        </div>
        <p className="modal-desc">
          Project inovatif yang menggabungkan keahlian mekanik otomotif dan teknologi informasi. Menggunakan mikrokontroler ESP32 untuk melakukan remapping ECU (Engine Control Unit) sepeda motor, memungkinkan pengaturan performa mesin secara digital dan presisi.
        </p>
        <ul className="modal-list">
          <li>Remapping parameter injeksi bahan bakar</li>
          <li>Monitoring real-time via WiFi ESP32</li>
          <li>Interface web-based sederhana</li>
          <li>Kompatibel berbagai tipe ECU standar</li>
        </ul>
      </div>
    </div>
  )
}

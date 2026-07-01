import React, { useEffect, useRef, useState, useCallback } from 'react'
import styles from './ChatbotDemo.module.css'

const KB = [
  { k: ['halo','hai','hello','hi','hei','selamat'],    r: ['Halo! Saya AutoBot 🤖 — asisten AI otomotif Anda. Ada yang bisa saya bantu hari ini?'] },
  { k: ['service','servis','serv'],                    r: ['Tentu! Saya bisa bantu booking service. Kendaraan apa yang ingin diservis? (contoh: Honda Beat, Mitsubishi Xpander)'] },
  { k: ['booking','jadwal','book','buat janji'],       r: ['Silakan pilih jadwal:\n📅 Senin–Jumat: 08.00–17.00\n📅 Sabtu: 08.00–13.00\nHari dan jam berapa yang cocok?'] },
  { k: ['honda','beat','vario','pcx','cbr'],           r: ['Kami melayani semua kendaraan Honda! Servis berkala, ganti oli, tune-up tersedia. Mau langsung booking?'] },
  { k: ['mitsubishi','xpander','pajero','l300','colt'],r: ['Kendaraan Mitsubishi kami tangani oleh teknisi berpengalaman. Spare part asli tersedia. Perlu booking?'] },
  { k: ['oli','ganti oli','engine oil'],               r: ['Ganti oli disarankan setiap 3.000–5.000 km atau 3 bulan sekali. Kami menggunakan oli genuine. Kapan terakhir ganti oli?'] },
  { k: ['rem','brake','bunyi','blong'],                r: ['Masalah rem harus segera ditangani! 🚨 Jangan ditunda. Saya sarankan bawa ke bengkel sekarang. Mau saya bantu booking emergency?'] },
  { k: ['harga','biaya','tarif','cost','berapa'],      r: ['Harga servis bervariasi tergantung jenis kendaraan & layanan. Estimasi:\n🔧 Ganti oli: Rp 85.000–150.000\n🔧 Tune-up: Rp 200.000–400.000\n🔧 Servis berkala: Rp 150.000–350.000'] },
  { k: ['lokasi','alamat','dimana','bengkel'],         r: ['📍 Bengkel kami berlokasi di Kabupaten Blitar, Jawa Timur.\nBuka setiap hari Senin–Sabtu.\nButuh petunjuk arah?'] },
  { k: ['terima kasih','makasih','thanks','thx'],      r: ['Sama-sama! 😊 Senang bisa membantu. Ada pertanyaan lain?', 'Terima kasih sudah menghubungi AutoBot! Semoga kendaraan Anda selalu prima! 🚗✨'] },
  { k: ['bye','dadah','selamat tinggal','sampai jumpa'],r: ['Sampai jumpa! Tetap aman di jalan ya 🏍️ Hubungi kami kapan saja!'] },
  { k: ['ac','air conditioner','dingin','freon'],      r: ['AC tidak dingin bisa disebabkan freon habis atau kompresor bermasalah. Kami melayani servis AC kendaraan. Mau booking?'] },
  { k: ['ban','tyre','tire','kempes','bocor'],         r: ['Ban bocor atau kempes? Segera aman ke pinggir jalan! 🚨 Kami bisa bantu tambal ban & balancing. Mau booking?'] },
  { k: ['aki','baterai','battery','mogok'],            r: ['Kendaraan mogok bisa karena aki lemah. Kami sediakan penggantian aki dengan garansi 6 bulan. Perlu bantuan?'] },
]
const SUGGESTIONS = ['📅 Booking Service', '💰 Tanya Harga', '📍 Lokasi Bengkel', '🔧 Ganti Oli', '🚗 Masalah Kendaraan']

function getBotReply(msg) {
  const lower = msg.toLowerCase()
  for (const item of KB) {
    if (item.k.some(kw => lower.includes(kw))) {
      return item.r[Math.floor(Math.random() * item.r.length)]
    }
  }
  return 'Maaf, saya belum memahami pertanyaan itu. Coba tanyakan tentang: **service kendaraan, harga, booking, lokasi**, atau masalah teknis kendaraan Anda 🤖'
}

function nowTime() {
  return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
}

function ChatMessage({ role, text, time }) {
  const html = text
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  return (
    <div className={`${styles.msg} ${role === 'user' ? styles.user : styles.bot}`}>
      <div className={styles.bubble} dangerouslySetInnerHTML={{ __html: html }} />
      <span className={styles.time}>{time}</span>
    </div>
  )
}

export default function ChatbotDemo({ isOpen, onClose }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [initialized, setInitialized] = useState(false)
  const chatRef = useRef(null)

  useEffect(() => {
    if (isOpen && !initialized) {
      setInitialized(true)
      setTimeout(() => {
        setMessages([{
          role: 'bot',
          text: 'Halo! 👋 Saya **AutoBot** — Asisten Customer Service AI untuk kebutuhan otomotif Anda.\n\nSaya bisa membantu:\n✅ Booking service kendaraan\n✅ Info harga & biaya\n✅ Pertanyaan teknis\n✅ Lokasi & jadwal bengkel\n\nAda yang bisa saya bantu?',
          time: nowTime()
        }])
      }, 400)
    }
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen, initialized])

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [messages, typing])

  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const sendMsg = useCallback((preset) => {
    const text = (preset || input).trim()
    if (!text) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text, time: nowTime() }])
    setTyping(true)
    const delay = 600 + Math.random() * 700
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { role: 'bot', text: getBotReply(text), time: nowTime() }])
    }, delay)
  }, [input])

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={styles.box}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.dot}></div>
            <div>
              <div className={styles.botName}>AutoBot <span className="accent">AI</span></div>
              <div className={styles.botStatus}>● Online · Customer Service Otomotif</div>
            </div>
          </div>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </div>
        <div className={styles.chat} ref={chatRef}>
          {messages.map((m, i) => <ChatMessage key={i} {...m} />)}
          {typing && (
            <div className={`${styles.msg} ${styles.bot}`}>
              <div className={styles.typing}>
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
        </div>
        <div className={styles.suggestions}>
          {SUGGESTIONS.map(s => (
            <button key={s} className={styles.suggBtn} onClick={() => sendMsg(s)}>{s}</button>
          ))}
        </div>
        <div className={styles.inputRow}>
          <input
            className={styles.input}
            type="text"
            value={input}
            placeholder="Ketik pertanyaan Anda..."
            autoComplete="off"
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMsg()}
          />
          <button className={styles.sendBtn} onClick={() => sendMsg()}>➤</button>
        </div>
      </div>
    </div>
  )
}

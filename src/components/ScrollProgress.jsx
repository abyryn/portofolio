import React, { useEffect, useState } from 'react'
import styles from './ScrollProgress.module.css'

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function update() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return <div className={styles.bar} style={{ width: `${width}%` }} />
}

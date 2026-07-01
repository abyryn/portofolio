import React, { useEffect, useState } from 'react'
import styles from './LoadingScreen.module.css'

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => {
      setHidden(true)
      document.body.style.overflow = ''
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`${styles.screen} ${hidden ? styles.hidden : ''}`}>
      <div className={styles.inner}>
        <div className={styles.logo}>AR</div>
        <div className={styles.bar}>
          <div className={styles.fill}></div>
        </div>
        <p className={styles.text}>Loading...</p>
      </div>
    </div>
  )
}

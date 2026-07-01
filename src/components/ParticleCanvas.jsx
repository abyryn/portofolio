import React, { useEffect, useRef } from 'react'
import styles from './ParticleCanvas.module.css'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let animId
    let W, H

    function resize() {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    function createParticle() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '0, 212, 255' : '0, 102, 255'
      }
    }

    function init() {
      resize()
      particles = []
      const count = Math.min(Math.floor((W * H) / 12000), 90)
      for (let i = 0; i < count; i++) particles.push(createParticle())
    }

    function drawLines() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, W, H)
      drawLines()
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`
        ctx.fill()
      })
      animId = requestAnimationFrame(animate)
    }

    function handleResize() {
      cancelAnimationFrame(animId)
      init()
      animate()
    }

    init()
    animate()
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} />
}

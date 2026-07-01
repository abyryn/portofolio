import { useEffect } from 'react'

export function useAOS() {
  useEffect(() => {
    function handleAOS() {
      const elements = document.querySelectorAll('[data-aos]')
      const triggerPoint = window.innerHeight * 0.88
      elements.forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < triggerPoint) {
          const delay = el.getAttribute('data-aos-delay') || 0
          setTimeout(() => el.classList.add('aos-animate'), parseInt(delay))
        }
      })
    }

    window.addEventListener('scroll', handleAOS, { passive: true })
    // initial run after components mount
    setTimeout(handleAOS, 300)

    return () => window.removeEventListener('scroll', handleAOS)
  }, [])
}

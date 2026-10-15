import { useEffect, useState } from 'react'

/** 0–1 progress through an element's height from the top of the viewport. */
export function useScrollProgress(selector = '.hero') {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let frame = 0

    const update = () => {
      frame = 0
      const el = document.querySelector(selector)
      if (!el) return
      const rect = el.getBoundingClientRect()
      const height = Math.max(rect.height, 1)
      const raw = Math.min(Math.max(-rect.top / height, 0), 1)
      setProgress(raw)
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [selector])

  return progress
}

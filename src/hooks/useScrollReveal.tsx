import { useEffect } from 'react'

export const useScrollReveal = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scroll-reveal')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // Observe all scroll-reveal elements
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal')
    scrollRevealElements.forEach((el) => observer.observe(el))

    return () => {
      scrollRevealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}
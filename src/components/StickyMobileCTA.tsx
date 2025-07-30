import { useState, useEffect } from "react"
import { Button } from "@/components/ui/custom-button"
import { Phone, X } from "lucide-react"

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      setLastScrollY(currentScrollY)
      
      // Show after scrolling 100px and scrolling down
      setIsVisible(currentScrollY > 100 && scrollDirection === 'down')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, scrollDirection])

  if (!isVisible) return null

  return (
    <div className={`fixed bottom-4 left-4 right-4 z-50 md:hidden transition-all duration-300 ${
      isVisible && scrollDirection === 'down' ? 'sticky-cta-show' : 'translate-y-full'
    }`}>
      {!isMinimized ? (
        <div className="glass rounded-lg p-3 shadow-hover border border-white/20">
          <Button size="sm" className="w-full tap-feedback text-xs">
            Get started today
          </Button>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="glass rounded-full p-3 shadow-medium ml-auto block border border-white/20 tap-feedback"
        >
          <Phone className="w-5 h-5 text-accent-brand" />
        </button>
      )}
    </div>
  )
}

export default StickyMobileCTA
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/custom-button"
import { Phone, X } from "lucide-react"

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 100px
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`fixed bottom-4 left-4 right-4 z-50 md:hidden transition-all duration-300 ${
      isMinimized ? 'translate-y-0' : 'translate-y-0'
    }`}>
      {!isMinimized ? (
        <div className="glass rounded-premium-lg p-4 shadow-hover border border-white/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent-brand" />
              <span className="font-heading font-semibold text-sm text-foreground">
                Ready to get started?
              </span>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-muted-foreground hover:text-foreground p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button size="sm" className="text-xs">
              Subscribe Now
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              Book a Call
            </Button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="glass rounded-full p-3 shadow-medium ml-auto block border border-white/20"
        >
          <Phone className="w-5 h-5 text-accent-brand" />
        </button>
      )}
    </div>
  )
}

export default StickyMobileCTA
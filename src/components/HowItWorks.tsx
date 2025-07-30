import { Send, Sparkles, RotateCcw, FileCheck } from "lucide-react"
import { useEffect, useState } from 'react'

const steps = [
  {
    icon: Send,
    title: "Submit your request",
    description: "Send us your legal needs through our simple platform"
  },
  {
    icon: Sparkles,
    title: "We assign a lawyer", 
    description: "Our team matches you with the right legal expert for your needs"
  },
  {
    icon: FileCheck,
    title: "Get your docs",
    description: "Receive your polished legal work delivered on time"
  }
]

const AnimatedPath = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" 
      viewBox="0 0 1200 200"
      preserveAspectRatio="none"
    >
      <path
        d="M 100 100 Q 400 50 500 100 T 900 100 Q 1000 120 1100 100"
        stroke="url(#gradient)"
        strokeWidth="3"
        fill="none"
        className={`animated-path ${isVisible ? 'animate' : ''}`}
        strokeDasharray="10,5"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--accent-brand))" stopOpacity="0.6" />
          <stop offset="50%" stopColor="hsl(var(--accent-purple))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--accent-brand))" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('how-it-works')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="how-it-works" className="py-12 md:py-24 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-8">
            How It Works
          </h2>
        </div>
        
        {/* Mobile: Stack layout, Desktop: Connected flow */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatedPath isVisible={isVisible} />
          
          <div className="grid gap-8 md:gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div 
                  key={index} 
                  className={`relative text-center lg:text-left group ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${index * 0.3}s`
                  }}
                >
                  {/* Step connector for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 top-20 w-px h-16 bg-gradient-to-b from-accent-brand/50 to-accent-purple/50"></div>
                  )}
                  
                   {/* Icon container with breathing animation */}
                   <div className="relative mb-6 md:mb-8">
                     <div className="inline-flex items-center justify-center w-6 h-6 bg-gradient-to-br from-accent-brand to-accent-purple text-white rounded-full font-bold text-xs shadow-lg magnetic-hover breathing touch-target group-hover:scale-110 transition-transform duration-300" style={{width: '24px', height: '24px'}}>
                       <span className="font-bold">{index + 1}</span>
                     </div>
                   </div>
                  
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="font-heading text-lg md:text-xl lg:text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
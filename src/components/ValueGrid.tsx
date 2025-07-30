import { useEffect, useState } from 'react'

const items = [
  {
    number: "01",
    title: "More affordable than an in-house legal team",
    description: "Enjoy the benefits of on-demand legal support at a fraction of the cost of hiring your own in-house legal team."
  },
  {
    number: "02", 
    title: "Immediate access to top-quality legal advice",
    description: "No more worrying about your lawyer's level of experience. With us, rest assured that your work will always be overseen by senior lawyers."
  },
  {
    number: "03",
    title: "Monthly fee without the uncertainty of hourly billing", 
    description: "Traditionally lawyers bill per hour, leaving clients with uncertainty on costs and time. With our fixed monthly fee, stick to your budget and put your mind at ease."
  }
]

const WhyUs = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleItems(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.3 }
    )

    const elements = document.querySelectorAll('.staggered-reveal')
    elements.forEach(el => observer.observe(el))

    return () => elements.forEach(el => observer.unobserve(el))
  }, [])

  return (
    <section id="why-us" className="py-12 md:py-24 bg-background relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-brand/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent-purple/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-8">
            The Modern Alternative to Traditional Law Firms
          </h2>
        </div>
        
        {/* Mobile-first staggered layout */}
        <div className="max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div 
              key={index}
              data-index={index}
              className={`staggered-reveal staggered-item relative mb-16 md:mb-24 last:mb-0 ${
                index % 2 === 0 ? 'md:pr-12 lg:pr-24' : 'md:pl-12 lg:pl-24 md:text-right'
              } ${
                visibleItems.includes(index) ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Connecting line for desktop */}
              {index < items.length - 1 && (
                <div className={`hidden md:block absolute ${
                  index % 2 === 0 ? 'right-0 top-1/2' : 'left-0 top-1/2'
                } w-12 lg:w-24 h-px bg-gradient-to-r from-accent-brand/30 to-accent-purple/30 transform -translate-y-1/2 ${
                  index % 2 === 0 ? 'translate-x-full' : '-translate-x-full'
                }`}></div>
              )}
              
              {/* Number badge */}
              <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 ${
                index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'
              } bg-gradient-to-br from-accent-brand to-accent-purple text-white rounded-2xl font-bold text-xl md:text-2xl breathing touch-target`}>
                {item.number}
              </div>
              
              {/* Content card */}
              <div className={`bg-card/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border/50 magnetic-hover ${
                index % 2 === 0 ? 'md:mr-12 lg:mr-24' : 'md:ml-12 lg:ml-24'
              }`}>
                <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6">
                  {item.title}
                </h3>
                <p className="font-body text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
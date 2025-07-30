const services = [
  "Non-Disclosure Agreements",
  "Memorandum of Understanding", 
  "Board & Shareholder Resolutions",
  "Service Agreements",
  "Commercial Leases",
  "General Terms & Conditions",
  "Power of Attorney",
  "Supply & Purchase Agreements",
  "Termination & Waiver of Claims",
  "...and many more."
]

const ScopeOfServices = () => {
  return (
    <section id="scope" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-8">
            Comprehensive Scope of Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            // Create varied card sizes for dynamic layout
            const isWide = index === 1 || index === 6 // Make some cards span 2 columns
            const isTall = index === 3 || index === 7 // Make some cards span 2 rows
            
            return (
              <div 
                key={index} 
                className={`
                  bg-gradient-to-br from-card to-card/80 border border-border rounded-xl p-6 
                  hover:border-accent-brand/30 hover:shadow-medium transition-all duration-300
                  hover:scale-105 group cursor-pointer
                  ${isWide ? 'lg:col-span-2' : ''}
                  ${isTall ? 'lg:row-span-2' : ''}
                  ${index === services.length - 1 ? 'lg:col-span-2 bg-gradient-to-br from-accent-brand/10 to-accent-purple/10 border-accent-brand/20' : ''}
                `}
              >
                <div className="text-center h-full flex items-center justify-center">
                  <h3 className={`
                    font-heading font-bold text-foreground group-hover:text-accent-brand transition-colors
                    ${isWide || isTall ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}
                    ${index === services.length - 1 ? 'text-accent-brand text-2xl md:text-3xl' : ''}
                  `}>
                    {service}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ScopeOfServices
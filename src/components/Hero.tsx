import { Button } from "@/components/ui/custom-button"

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-16 md:pt-20 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-accent-brand/10 to-accent-purple/10 rounded-full blur-3xl breathing"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-accent-purple/10 to-accent-brand/10 rounded-full blur-2xl breathing" style={{animationDelay: '1.5s'}}></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16 relative z-10">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="hero-headline font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-8 leading-tight">
              Legal help that's fast, simple, and stress-free.
            </h1>
            
            <div className="hero-content">
              <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4 md:mb-6">
                Unlimited contracts, reviews, and advice for one predictable monthly fee.
              </h2>
              
              <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                No hourly billing. No retainers. Just expert legal help when you need it.
              </p>
              
              <Button size="xl" className="group magnetic-hover ripple-effect touch-target tap-feedback gold-underline">
                Get started today
                <div className="ml-2 transition-transform group-hover:translate-x-1">→</div>
              </Button>
              
              {/* Trust Badge */}
              <div className="mt-8 md:mt-12 inline-flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-border/50">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent-brand to-accent-purple rounded-full border-2 border-background"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-accent-purple to-accent-brand rounded-full border-2 border-background"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-accent-brand to-accent-purple rounded-full border-2 border-background"></div>
                </div>
                <span className="text-sm font-medium text-muted-foreground">Trusted by 1,000+ businesses</span>
              </div>
            </div>
          </div>

          {/* Right Column - Trust Visual */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-card to-card-hover border border-border rounded-3xl p-8 md:p-12 shadow-2xl magnetic-hover">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-accent-brand to-accent-purple rounded-xl mx-auto mb-6 flex items-center justify-center breathing">
                    <span className="text-white font-bold text-2xl md:text-3xl">✓</span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">Legal Clarity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Professional legal support that's simple to understand and easy to act on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
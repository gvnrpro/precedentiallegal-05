import { useState } from "react"
import { Button } from "@/components/ui/custom-button"

const Hero = () => {
  const [isCardFlipped, setIsCardFlipped] = useState(false)

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
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8 leading-tight">
              Senior Legal Counsel,{" "}
              <span className="bg-gradient-to-r from-accent-brand to-accent-purple bg-clip-text text-transparent">
                On-Demand.
              </span>
            </h1>
            
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4 md:mb-6">
              Your In-House Team, Without the In-House Cost.
            </h2>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Our subscription model provides your business with unlimited access to expert legal support 
              for one, predictable monthly fee. Get the protection and peace of mind you need to grow confidently.
            </p>
            
            <Button size="xl" className="group magnetic-hover ripple-effect touch-target">
              View The Subscription Plan
              <div className="ml-2 transition-transform group-hover:translate-x-1">→</div>
            </Button>
          </div>

          {/* Right Column - Interactive Flip Card */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div 
              className="relative w-80 h-80 md:w-96 md:h-96 [perspective:1000px]"
              onMouseEnter={() => setIsCardFlipped(true)}
              onMouseLeave={() => setIsCardFlipped(false)}
              onClick={() => setIsCardFlipped(!isCardFlipped)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isCardFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                
                {/* Front of Card */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="w-full h-full bg-gradient-to-br from-card to-card-hover border border-border rounded-3xl p-6 md:p-8 shadow-2xl magnetic-hover">
                    <div className="text-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-accent-brand to-accent-purple rounded-xl mx-auto mb-4 md:mb-6 flex items-center justify-center breathing">
                        <span className="text-white font-bold text-xl md:text-2xl">§</span>
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Traditional Contract</h3>
                      <div className="font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
                        <p>
                          "Notwithstanding any other provision of this Agreement, the Party of the first part 
                          (hereinafter referred to as 'Party A') shall indemnify, defend, and hold harmless 
                          the Party of the second part..."
                        </p>
                      </div>
                      <div className="mt-4 md:mt-6 text-xs text-muted-foreground italic">
                        Tap/hover to see our approach →
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="w-full h-full bg-gradient-to-br from-accent-brand/20 to-accent-purple/20 border border-accent-brand/30 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-sm">
                    <div className="text-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-accent-brand to-accent-purple rounded-xl mx-auto mb-4 md:mb-6 flex items-center justify-center breathing">
                        <span className="text-white font-bold text-xl md:text-2xl">✓</span>
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Precedential Clarity</h3>
                      <div className="space-y-3 md:space-y-4 text-sm md:text-base">
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <span className="text-accent-brand font-bold">•</span>
                          <div>
                            <span className="font-semibold text-foreground">Your Responsibility:</span>
                            <span className="text-muted-foreground"> Handle your work professionally.</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <span className="text-accent-brand font-bold">•</span>
                          <div>
                            <span className="font-semibold text-foreground">Their Responsibility:</span>
                            <span className="text-muted-foreground"> They handle their mistakes.</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2 md:space-x-3">
                          <span className="text-accent-brand font-bold">•</span>
                          <div>
                            <span className="font-semibold text-foreground">Action:</span>
                            <span className="text-muted-foreground"> Proceed with confidence.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
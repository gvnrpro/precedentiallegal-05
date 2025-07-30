import { Button } from "@/components/ui/custom-button"
import { Check } from "lucide-react"

const PricingPreview = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16 lg:mb-20 scroll-reveal">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            No retainers. No hourly billing. Just expert support, when you need it.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="max-w-lg mx-auto scroll-reveal scroll-reveal-delay-1">
          <div className="bg-gradient-to-br from-card to-card-hover border border-border rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden magnetic-hover breathing">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-brand/5 to-transparent pointer-events-none" />
            
            <div className="relative">
              {/* Plan Name */}
              <div className="text-center mb-6 md:mb-8">
                <div className="inline-flex items-center gap-2 bg-accent-brand/10 text-accent-brand px-3 md:px-4 py-2 rounded-2xl text-xs md:text-sm font-semibold mb-3 md:mb-4">
                  UAE-based • Business-focused
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">
                  Business Scale Plan
                </h3>
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-accent-brand mb-2">
                  AED 5,000
                </div>
                <div className="font-body text-base md:text-lg text-muted-foreground">
                  per month
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  "Dedicated UAE-based legal advisor",
                  "Unlimited contract creation",
                  "Unlimited contract reviews & revisions", 
                  "Unlimited strategic legal calls",
                  "1–3 business day turnaround",
                  "Cancel anytime"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-accent-brand/10 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-accent-brand" />
                    </div>
                    <span className="font-body text-sm md:text-base text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center space-y-3 md:space-y-4">
                <Button size="xl" className="w-full group magnetic-hover ripple-effect touch-target">
                  <span>Subscribe Now</span>
                  <div className="ml-2 transition-transform group-hover:translate-x-1">→</div>
                </Button>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Need help deciding?{" "}
                  <button className="text-accent-brand hover:text-accent-brand-hover font-medium transition-colors magnetic-hover">
                    Book a Call
                  </button>{" "}
                  instead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPreview
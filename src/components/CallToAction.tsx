import { Button } from "@/components/ui/custom-button"

const CallToAction = () => {
  return (
    <section className="py-premium-xl bg-muted relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-brand/5 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center scroll-reveal">
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Ready to Remove Legal Bottlenecks?
            </h2>
            <p className="font-body text-2xl text-muted-foreground mb-12">
              Join forward-thinking businesses that have simplified their legal support.
            </p>
            
            <Button 
              size="xl" 
              className="group mb-8"
            >
              <span>Book a Free Consultation</span>
              <div className="ml-2 transition-transform group-hover:translate-x-1">→</div>
            </Button>
            
            <p className="text-muted-foreground">
              Questions? Email us at{" "}
              <a 
                href="mailto:hello@precedential.legal" 
                className="text-accent-brand hover:text-accent-brand-hover font-medium transition-colors focus-premium"
              >
                hello@precedential.legal
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
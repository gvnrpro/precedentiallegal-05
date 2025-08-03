import { Button } from "@/components/ui/custom-button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-apple-gray6 to-background opacity-60" />
      
      {/* Content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Text */}
          <div className="space-y-8">
            <h1 className="display animate-apple-fade-up opacity-0 text-balance" style={{ animationDelay: "0.1s" }}>
              Legal help. Simple.
            </h1>

            <h2 className="title-2 text-muted-foreground animate-apple-fade-up opacity-0 max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
              Unlimited legal support. One monthly fee.
            </h2>

            <p className="body text-muted-foreground animate-apple-fade-up opacity-0 max-w-xl mx-auto" style={{ animationDelay: "0.3s" }}>
              No hourly billing. No surprises. Just expert legal help when you need it.
            </p>

            {/* CTA Button */}
            <div className="animate-apple-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                className="apple-button apple-button-effect hover-scale tap-scale apple-focus text-lg px-8 py-4 h-auto"
              >
                Start
              </Button>
            </div>

            {/* Trust Badge */}
            <div className="animate-apple-fade-up opacity-0 mt-16" style={{ animationDelay: "0.5s" }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 glass-card rounded-full">
                <div className="flex -space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 bg-apple-blue rounded-full border-2 border-background"
                    />
                  ))}
                </div>
                <span className="footnote text-muted-foreground">
                  Trusted by 1000+ businesses
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
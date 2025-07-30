import { Button } from "@/components/ui/custom-button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background pt-20 overflow-hidden">
      {/* Floating Background Lights */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-accent-brand/10 to-accent-purple/10 rounded-full blur-3xl animate-float-slow" />
      <div
        className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-accent-purple/10 to-accent-brand/10 rounded-full blur-2xl animate-float-slow"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Legal help that's fast, simple, and stress-free.
            </h1>

            <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-6 max-w-2xl mx-auto lg:mx-0">
              Unlimited contracts, reviews, and advice for one predictable monthly fee.
            </h2>

            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              No hourly billing. No retainers. Just expert legal help when you need it.
            </p>

            <Button
              size="xl"
              className="group magnetic-hover ripple-effect tap-feedback gold-underline relative"
            >
              Get started today
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Button>

            {/* Trust Badge */}
            <div className="mt-10 inline-flex items-center gap-4 px-6 py-3 bg-card/60 backdrop-blur-md rounded-full border border-border shadow-md">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-br from-accent-brand to-accent-purple rounded-full border-2 border-background"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Trusted by 1,000+ businesses
              </span>
            </div>
          </motion.div>

          {/* Right Column - Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="w-full h-full bg-gradient-to-br from-card to-card-hover border border-border rounded-3xl p-10 md:p-12 shadow-2xl hover:shadow-3xl transition-shadow duration-300 magnetic-hover">
                <div className="h-full flex flex-col justify-center text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-accent-brand to-accent-purple rounded-xl mx-auto mb-6 flex items-center justify-center animate-pulse-slow">
                    <span className="text-white font-bold text-2xl md:text-3xl">✓</span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
                    Legal Clarity
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Professional legal support that's simple to understand and easy to act on.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
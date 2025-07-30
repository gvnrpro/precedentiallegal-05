'use client';

import { Button } from "@/components/ui/custom-button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Dedicated UAE-based legal advisor",
  "Unlimited contract creation",
  "Unlimited contract reviews & revisions", 
  "Unlimited strategic legal calls",
  "1–3 business day turnaround",
  "Cancel anytime"
];

const PricingPreview = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            No retainers. No hourly billing. Just expert support, when you need it.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="relative bg-gradient-to-br from-card to-card-hover border border-border rounded-3xl p-8 lg:p-10 shadow-xl group transition-all duration-300 hover:shadow-2xl magnetic-hover">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-brand/5 to-transparent pointer-events-none rounded-3xl" />

            <div className="relative z-10">
              {/* Tag */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-accent-brand/10 text-accent-brand px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4">
                  UAE-based • Business-focused
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  Business Scale Plan
                </h3>
                <div className="font-heading text-5xl md:text-6xl font-bold text-accent-brand mb-1">
                  AED 5,000
                </div>
                <p className="font-body text-base md:text-lg text-muted-foreground">
                  per month
                </p>
              </div>

              {/* Feature List */}
              <ul className="space-y-4 mb-8">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-brand/10 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-accent-brand" />
                    </div>
                    <span className="font-body text-base text-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="text-center space-y-3">
                <Button
                  size="xl"
                  className="w-full group ripple-effect touch-target magnetic-hover"
                >
                  Subscribe Now
                  <div className="ml-2 transition-transform group-hover:translate-x-1">→</div>
                </Button>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Not sure yet?{" "}
                  <button className="text-accent-brand hover:text-accent-brand-hover font-medium transition-colors underline underline-offset-2">
                    Book a Call
                  </button>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPreview;
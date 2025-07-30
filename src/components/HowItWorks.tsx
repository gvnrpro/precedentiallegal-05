'use client';

import { useEffect, useState } from 'react';
import {
  Send,
  Sparkles,
  FileCheck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    icon: Send,
    title: "Submit your request",
    description: "Send us your legal needs through our simple platform.",
  },
  {
    icon: Sparkles,
    title: "We assign a lawyer",
    description: "Our team matches you with the right legal expert for your needs.",
  },
  {
    icon: FileCheck,
    title: "Get your docs",
    description: "Receive your polished legal work delivered on time.",
  },
];

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
  );
};

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById("how-it-works");
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      className="relative py-16 md:py-24 bg-muted overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-foreground"
          >
            How It Works
          </motion.h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatedPath isVisible={isVisible} />

          <div className="grid gap-10 md:gap-16 lg:grid-cols-3 items-start text-center lg:text-left">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center lg:items-start"
                >
                  {/* Mobile vertical line connector */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 top-[72px] w-px h-16 bg-gradient-to-b from-accent-brand/40 to-accent-purple/40" />
                  )}

                  {/* Step icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-brand to-accent-purple text-white flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step title + description */}
                  <div className="space-y-2 md:space-y-3 max-w-sm">
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
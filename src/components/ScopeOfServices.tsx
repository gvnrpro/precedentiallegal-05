'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  ClipboardSignature,
  Landmark,
  Briefcase,
  ScrollText,
  ReceiptText,
  ShieldCheck,
  Gavel,
  XCircle,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    title: "Non-Disclosure Agreements",
    icon: FileText,
    description: "Protect confidential information in business deals or collaborations.",
  },
  {
    title: "Memorandum of Understanding",
    icon: ClipboardSignature,
    description: "Non-binding agreements outlining intent between parties.",
  },
  {
    title: "Board & Shareholder Resolutions",
    icon: Landmark,
    description: "Formalize key decisions within your corporation or startup.",
  },
  {
    title: "Service Agreements",
    icon: Briefcase,
    description: "Define scope, fees, and deliverables with your clients or vendors.",
  },
  {
    title: "Commercial Leases",
    icon: ScrollText,
    description: "Contracts for office, retail, or industrial real estate spaces.",
  },
  {
    title: "General Terms & Conditions",
    icon: ReceiptText,
    description: "Standard terms for websites, platforms, or e-commerce stores.",
  },
  {
    title: "Power of Attorney",
    icon: ShieldCheck,
    description: "Authorize someone to act legally on your behalf.",
  },
  {
    title: "Supply & Purchase Agreements",
    icon: Gavel,
    description: "Formalize B2B product or resource transactions.",
  },
  {
    title: "Termination & Waiver of Claims",
    icon: XCircle,
    description: "Clean legal exits and mutual releases of liability.",
  },
  {
    title: "...and many more.",
    icon: Sparkles,
    description: "Custom legal help for your unique business needs.",
  },
];

const ScopeOfServices = () => {
  const [selectedService, setSelectedService] = useState<null | typeof services[0]>(null);

  return (
    <section id="scope" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
          >
            Comprehensive Scope of Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(150px,_auto)] gap-6 max-w-7xl mx-auto">
          {services.map(({ title, icon: Icon, description }, index) => {
            const isWide = index === 1 || index === 5;
            const isTall = index === 3 || index === 6;
            const isFinal = index === services.length - 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.4, ease: 'easeOut' }}
                onClick={() => setSelectedService({ title, icon: Icon, description })}
                className={`
                  relative group flex flex-col items-center justify-center text-center
                  bg-gradient-to-br 
                  ${isFinal
                    ? 'from-accent-brand/10 to-accent-purple/10 border-accent-brand/20'
                    : 'from-card to-card/80 border-border'}
                  border rounded-xl p-6 sm:p-8
                  hover:shadow-hover hover:scale-[1.03] transition-all duration-300 cursor-pointer transform-gpu
                  ${isWide ? 'lg:col-span-2' : ''}
                  ${isTall ? 'lg:row-span-2' : ''}
                `}
              >
                <div
                  className="absolute top-2 right-2 text-muted-foreground text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Tap for more
                </div>

                <div className={`
                  mb-4 w-12 h-12 rounded-md flex items-center justify-center
                  ${isFinal
                    ? 'bg-gradient-to-br from-accent-brand to-accent-purple text-white'
                    : 'bg-muted text-accent-brand group-hover:scale-110 transition-transform duration-300'}
                `}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className={`
                  font-heading font-semibold transition-colors duration-300
                  ${isFinal
                    ? 'text-accent-brand text-xl md:text-2xl'
                    : 'text-foreground group-hover:text-accent-brand text-lg md:text-xl'}
                `}>
                  {title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Basic Modal */}
      {selectedService && (
        <div
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-background max-w-md w-full rounded-xl p-6 border border-border shadow-xl"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <selectedService.icon className="w-6 h-6 text-accent-brand" />
                <h4 className="font-heading font-semibold text-lg text-foreground">
                  {selectedService.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-muted-foreground hover:text-foreground transition"
              >
                ×
              </button>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {selectedService.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ScopeOfServices;
import { FileText, Shield, MessageCircle, FileCheck, RotateCcw, Target } from "lucide-react"
import { Button } from "@/components/ui/custom-button"
import { useState } from "react"

const services = [
  {
    icon: FileText,
    title: "Contract Creation",
    subline: "From employment to commercial leases — all tailored to your business.",
    hoverText: "Includes NDAs, vendor agreements, offer letters, MOUs, and more."
  },
  {
    icon: Shield,
    title: "Contract Review",
    subline: "We'll flag risks, redline terms, and explain what matters — fast.",
    hoverText: "From vendor T&Cs to investor terms, we've seen it all."
  },
  {
    icon: MessageCircle,
    title: "Legal Advice",
    subline: "Strategic calls and ongoing legal input, always at your side.",
    hoverText: "Ask us anything — structure, disputes, negotiations, you name it."
  },
  {
    icon: FileCheck,
    title: "Policy & Compliance",
    subline: "HR docs, internal policies, VAT and tax support — all covered.",
    hoverText: "We prepare employee handbooks, compliance docs, and internal checklists."
  },
  {
    icon: RotateCcw,
    title: "Unlimited Revisions",
    subline: "We keep working until it's right. No limits. No attitude.",
    hoverText: "Unlimited edits to any deliverable until you sign off with confidence."
  },
  {
    icon: Target,
    title: "Clear Boundaries",
    subline: "No surprises — you'll always know what's included and what's extra.",
    hoverText: "Need M&A, litigation, or due diligence? We'll quote you upfront."
  }
]

const WhatsIncluded = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
            What's Included
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto">
            All the day-to-day legal support your growing business actually needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-background p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border border-muted/20 hover:border-accent/30"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-accent to-accent/80 text-brand-navy rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-200">
                <service.icon size={26} strokeWidth={1.5} />
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4 group-hover:text-brand-navy transition-colors duration-200">
                {service.title}
              </h3>
              
              <div className="min-h-[4.5rem]">
                <p className={`font-body text-muted-foreground leading-relaxed transition-all duration-300 ${
                  hoveredCard === index ? 'opacity-0 transform -translate-y-2' : 'opacity-100 transform translate-y-0'
                }`}>
                  {service.subline}
                </p>
                
                <p className={`font-body text-brand-navy font-medium leading-relaxed absolute transition-all duration-300 ${
                  hoveredCard === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'
                }`}>
                  {service.hoverText}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-muted/30 via-background to-muted/30 rounded-3xl p-10 max-w-4xl mx-auto border border-muted/30 shadow-sm">
          <p className="font-body text-xl text-foreground mb-8 font-medium">
            Need something more advanced? Let's talk.
          </p>
          <Button size="xl" variant="primary" className="hover-scale">
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  )
}

export default WhatsIncluded
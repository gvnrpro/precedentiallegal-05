import Header from "@/components/Header"
import Hero from "@/components/Hero"
import WhyUs from "@/components/ValueGrid"
import HowItWorks from "@/components/HowItWorks"
import ScopeOfServices from "@/components/ScopeOfServices"
import PricingPreview from "@/components/PricingPreview"
import CallToAction from "@/components/CallToAction"
import Footer from "@/components/Footer"
import StickyMobileCTA from "@/components/StickyMobileCTA"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const Index = () => {
  useScrollReveal()
  
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyUs />
      <HowItWorks />
      <ScopeOfServices />
      <PricingPreview />
      <CallToAction />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;

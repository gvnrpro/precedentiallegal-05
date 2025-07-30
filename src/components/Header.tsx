import { useState, useEffect } from "react";
import { Button } from "@/components/ui/custom-button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-heading text-2xl text-foreground text-left font-semibold">Precedential.legal</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('why-us')} className="font-body text-foreground hover:text-accent-brand transition-colors">
              Why Us
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="font-body text-foreground hover:text-accent-brand transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('scope')} className="font-body text-foreground hover:text-accent-brand transition-colors">
              Scope
            </button>
            <button onClick={() => scrollToSection('pricing')} className="font-body text-foreground hover:text-accent-brand transition-colors">
              Pricing
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="default" variant="primary">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground hover:text-accent-brand transition-colors">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/20">
            <nav className="flex flex-col space-y-4 p-6">
              <button onClick={() => scrollToSection('why-us')} className="font-body text-foreground hover:text-accent-brand transition-colors text-left">
                Why Us
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="font-body text-foreground hover:text-accent-brand transition-colors text-left">
                How It Works
              </button>
              <button onClick={() => scrollToSection('scope')} className="font-body text-foreground hover:text-accent-brand transition-colors text-left">
                Scope
              </button>
              <button onClick={() => scrollToSection('pricing')} className="font-body text-foreground hover:text-accent-brand transition-colors text-left">
                Pricing
              </button>
              <div className="pt-4">
                <Button size="default" variant="primary" className="w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;
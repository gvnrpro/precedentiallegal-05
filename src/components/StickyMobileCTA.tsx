'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/custom-button";
import { Phone } from "lucide-react";

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);

      setIsVisible(currentScrollY > 100 && scrollDirection === 'down');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, scrollDirection]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-50 md:hidden transition-transform duration-300 ease-out
        ${isVisible && scrollDirection === 'down' ? 'translate-y-0' : 'translate-y-full'}`}
    >
      {!isMinimized ? (
        <div className="backdrop-blur-md bg-muted/80 border border-border rounded-xl shadow-md p-3 flex items-center gap-3">
          <Button
            size="sm"
            className="w-full text-sm tap-feedback"
            onClick={() => setIsMinimized(true)}
          >
            Get started today
          </Button>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="backdrop-blur-md bg-muted/80 border border-border rounded-full p-3 shadow-md ml-auto block tap-feedback"
        >
          <Phone className="w-5 h-5 text-accent-brand" />
        </button>
      )}
    </div>
  );
};

export default StickyMobileCTA;
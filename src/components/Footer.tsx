import { useState } from "react";
import { Globe } from "lucide-react";
const Footer = () => {
  const [language, setLanguage] = useState("English");
  return <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="font-heading text-2xl font-bold text-brand-navy mb-2">
              Precedential.Legal
            </div>
            <p className="font-body text-muted-foreground">
              Legal help, sorted.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="flex items-center gap-6">
              <a href="#" className="font-body text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-body text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-accent transition-colors" onClick={() => setLanguage(language === "English" ? "العربية" : "English")}>
              <Globe size={16} className="text-muted-foreground" />
              <span className="font-body text-sm text-foreground">{language}</span>
            </button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="font-body text-muted-foreground">© 2025 Precedential.Legal. All rights reserved. | Licensed legal consultancy in the UAE</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
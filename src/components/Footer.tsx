import { useState } from "react";
import { Globe } from "lucide-react";

const Footer = () => {
  const [language, setLanguage] = useState("English");
  
  return (
    <footer className="py-16 bg-apple-gray6/30 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="title-3 font-semibold text-foreground mb-1">
              Precedential
            </div>
            <p className="footnote text-muted-foreground">
              Legal help, simplified.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-6">
              <a href="#" className="footnote text-muted-foreground hover:text-foreground transition-colors apple-focus">
                Terms
              </a>
              <a href="#" className="footnote text-muted-foreground hover:text-foreground transition-colors apple-focus">
                Privacy
              </a>
            </div>
            
            <button 
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-accent transition-colors apple-focus" 
              onClick={() => setLanguage(language === "English" ? "العربية" : "English")}
            >
              <Globe size={14} className="text-muted-foreground" />
              <span className="caption-1 text-foreground">{language}</span>
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="caption-1 text-muted-foreground">
            © 2025 Precedential.Legal. Licensed legal consultancy in the UAE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
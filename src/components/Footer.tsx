
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={scrollToTop}
            className="p-2 bg-primary rounded-full text-primary-foreground hover:bg-primary/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
          
          <div className="text-center">
            <a href="#home" className="text-xl font-bold tracking-tighter text-primary">
              <span className="text-foreground">Dev</span>Portfolio
            </a>
            <p className="text-muted-foreground mt-2">
              &copy; {currentYear} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CB</span>
          </div>
          <span className="text-xl font-bold text-foreground">Clutter-B-Gone</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#process" className="text-muted-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="tel:+18014487599" className="hidden sm:flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>(801) 448-7599</span>
          </a>
          <Button variant="hero" size="default" className="hidden sm:inline-flex">
            Get Free Estimate
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CB</span>
              </div>
              <span className="text-xl font-bold">Clutter-B-Gone</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Your all-around junk removal service. We provide professional, 
              affordable junk removal with great customer service and no hidden fees.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Small Load Pickup</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Large Load Pickup</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">You Fill, We Haul</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Residential</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Commercial</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-background/80">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Service Areas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Free Estimates</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-background/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>(801) 448-7599</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@clutterb-gone.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Utah & Arizona</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-background/5 rounded-lg border border-background/10">
              <p className="text-sm text-background/60 mb-2">Need Same Day Service?</p>
              <p className="text-primary font-semibold">We're Here to Help!</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-background/60 text-sm">
              © 2024 Clutter-B-Gone. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
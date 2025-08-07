import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium">Get Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Get Rid of
              <span className="block text-primary">Your Junk?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Get your free estimate today and schedule your junk removal service. 
              We make it easy with upfront pricing and same day service available.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Call Us Today</div>
                  <div className="text-muted-foreground">(801) 448-7599</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email Us</div>
                  <div className="text-muted-foreground">info@clutterb-gone.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Service Area</div>
                  <div className="text-muted-foreground">Utah & Arizona</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Availability</div>
                  <div className="text-muted-foreground">Mon-Sat: 8AM-6PM | Sun: Emergency Only</div>
                </div>
              </div>
            </div>

            <div className="bg-success/10 rounded-xl p-6 border border-success/20">
              <h3 className="text-lg font-semibold text-success mb-2">Free Estimate Includes:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Upfront pricing with no hidden fees</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Assessment of items to be removed</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Scheduling at your convenience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Professional, insured service</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-card-glow">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Get Your Free Estimate</CardTitle>
              <p className="text-muted-foreground">
                Tell us about your junk removal needs and we'll provide an upfront quote.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input placeholder="John" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input placeholder="Doe" className="bg-background/50" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-background/50" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                <Input type="tel" placeholder="(123) 456-7890" className="bg-background/50" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Service Needed</label>
                <select className="w-full p-3 rounded-md border border-input bg-background/50 text-foreground">
                  <option>Small Load Pickup</option>
                  <option>Large Load Pickup</option>
                  <option>You Fill, We Haul</option>
                  <option>Residential Cleanout</option>
                  <option>Commercial Cleanout</option>
                  <option>Estate Cleanout</option>
                  <option>Other - Please Specify</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Tell us about your junk removal needs</label>
                <Textarea 
                  placeholder="Describe what items need to be removed, location details, and any special requirements..." 
                  className="bg-background/50 min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full group">
                Get Free Estimate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Your information will only be used to provide your quote.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
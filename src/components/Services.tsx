import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Building2, Truck, Recycle, Sparkles, Clock } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Pickups",
    description: "Say goodbye to clutter with ease through our general pickup service. We handle small to medium loads quickly and efficiently.",
    features: ["Small load pickup", "Same day service", "No hidden fees", "Professional crew"]
  },
  {
    icon: Home,
    title: "Residential",
    description: "Complete residential junk removal services for homes, apartments, and condos. From single items to whole house cleanouts.",
    features: ["Furniture removal", "Appliance disposal", "Garage cleanouts", "Estate cleanouts"]
  },
  {
    icon: Building2,
    title: "Commercial", 
    description: "Professional commercial cleanout services for businesses, offices, and retail spaces. We work around your schedule.",
    features: ["Office cleanouts", "Retail space clearing", "Construction debris", "Foreclosure cleanouts"]
  },
  {
    icon: Recycle,
    title: "You Fill, We Haul",
    description: "Rent our trailer and fill it at your own pace. We'll pick it up when you're ready. Perfect for DIY projects.",
    features: ["Trailer rental", "Flexible pickup", "Affordable rates", "Various sizes available"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-peaceful-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-success" />
            <span className="text-success font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Junk Removal
            <span className="block text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            When you give us the green light, we will recycle, donate, or dump your clutter or junk 
            and sweep the area clean.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card-glow transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 inline-block">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">Free Consultation</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Not sure which service you need?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get a personalized assessment and quote at no cost
            </p>
            <Button variant="hero" size="lg">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
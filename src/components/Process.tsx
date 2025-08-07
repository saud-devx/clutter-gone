import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Calendar, Sparkles, Truck } from "lucide-react";
import processImage from "@/assets/organizing-process.jpg";

const steps = [
  {
    step: "01",
    title: "Free Estimate",
    description: "We provide upfront pricing with no hidden fees. You'll know exactly what to expect before we start.",
    icon: Phone
  },
  {
    step: "02", 
    title: "Schedule Service",
    description: "Book your junk removal at a time that works for you. Same day service available.",
    icon: Calendar
  },
  {
    step: "03",
    title: "We Remove Everything",
    description: "Our professional crew handles all the heavy lifting and removes everything from wherever it sits.",
    icon: Truck
  },
  {
    step: "04",
    title: "Clean Sweep",
    description: "We sweep the area clean and ensure responsible disposal through recycling and donation.",
    icon: CheckCircle
  }
];

export const Process = () => {
  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How Our Junk Removal
              <span className="block text-primary">Process Works</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Our streamlined 4-step process makes junk removal simple and stress-free. 
              We handle everything so you don't have to.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-card-glow transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                            STEP {step.step}
                          </span>
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-peaceful">
              <img 
                src={processImage} 
                alt="Professional organizers at work" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-hero-gradient/10"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-8 -right-8 bg-card backdrop-blur-sm rounded-xl p-6 shadow-card-glow border border-border/50">
              <div className="text-2xl font-bold text-primary mb-1">Same Day</div>
              <div className="text-sm text-muted-foreground">Service Available</div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-card backdrop-blur-sm rounded-xl p-6 shadow-card-glow border border-border/50">
              <div className="text-2xl font-bold text-success mb-1">No Fees</div>
              <div className="text-sm text-muted-foreground">Hidden Costs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Users, Heart } from "lucide-react";
import beforeAfterImage from "@/assets/before-after-garage.jpg";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Downtown",
    rating: 5,
    text: "Clutter-B-Gone completely transformed my chaotic home office into a peaceful, productive space. I can't believe the difference it's made to my daily stress levels!"
  },
  {
    name: "Mike Chen", 
    location: "Suburbia",
    rating: 5,
    text: "The team was professional, efficient, and really understood my needs. My garage went from disaster zone to organized dream in just two days."
  },
  {
    name: "Lisa Thompson",
    location: "Midtown",
    rating: 5,
    text: "Not only did they organize my entire house, but they taught me systems to maintain it. Six months later, everything is still perfectly organized!"
  }
];

export const Results = () => {
  return (
    <section id="results" className="py-20 bg-peaceful-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-6 py-2 mb-6">
            <Heart className="w-4 h-4 text-success" />
            <span className="text-success font-medium">Real Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dramatic Transformations
            <span className="block text-primary">That Change Lives</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the incredible before and after results that have helped hundreds of families 
            reclaim their peace of mind and transform their daily lives.
          </p>
        </div>

        {/* Before/After Showcase */}
        <div className="mb-20">
          <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-card-glow overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={beforeAfterImage} 
                  alt="Before and after garage transformation" 
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-chaos/60 via-transparent to-success/20"></div>
                
                {/* Before/After Labels */}
                <div className="absolute top-6 left-6 bg-chaos/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold">
                  BEFORE: Chaotic Clutter
                </div>
                <div className="absolute top-6 right-6 bg-success/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold">
                  AFTER: Organized Bliss
                </div>
                
                {/* Transformation Details */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-sm rounded-xl p-6 text-center border border-border/50">
                  <h3 className="text-lg font-bold text-foreground mb-2">2-Day Garage Transformation</h3>
                  <p className="text-muted-foreground text-sm">From overwhelming mess to functional storage system</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-card/80 backdrop-blur-sm hover:shadow-card-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-hero-gradient rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Stats */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Homes Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">85%</div>
              <div className="text-muted-foreground">Stress Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2.5M</div>
              <div className="text-muted-foreground">Items Organized</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="xl" className="group">
            Start Your Transformation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
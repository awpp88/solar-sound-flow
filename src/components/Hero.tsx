import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-solar.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-bg-zoom"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
      </div>
      
      {/* Animated Solar Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 animate-fade-in">
          <span className="text-gradient-solar">Solar Music Group</span>
        </h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-light mb-8 text-foreground/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Independent Energy in Sound
        </p>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Where cosmic creativity meets bold artistry. We're an independent music label powering the next generation of sound.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-scale" style={{ animationDelay: "0.6s" }}>
          <Button 
            variant="hero" 
            size="lg"
            asChild
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
          <Button 
            variant="cosmic" 
            size="lg"
            asChild
          >
            <a href="#music">Listen Now</a>
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

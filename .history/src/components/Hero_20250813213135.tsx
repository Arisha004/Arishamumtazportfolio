import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles, Star, Zap, Brain } from "lucide-react";
import heroImage from "@/assets/hero-main.webp";
import heroBackground from "@/assets/hero-background.webp";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/public/Arishamumtaz_resume.pdf';
    link.download = 'Arishamumtaz_resume.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10"></div>
        <img 
          src={heroBackground} 
          alt="AI-powered development environment with neural networks and holographic interfaces"
          className="absolute inset-0 w-full h-full object-cover opacity-30 animate-float-slow"
          loading="eager"
          fetchPriority="high"
        />
        <img 
          src={heroImage} 
          alt="Futuristic AI workspace with multiple floating screens and code interfaces"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
          loading="eager"
        />
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60"></div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-float-1"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float-2"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-glow/40 rounded-full blur-lg animate-float-3"></div>
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-secondary/30 rounded-full blur-xl animate-float-4"></div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-40 right-20 w-12 h-12 border-2 border-primary/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-40 left-20 w-8 h-8 bg-accent/40 transform rotate-12 animate-pulse"></div>

      <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
        <div className="hero-content">
          {/* Enhanced Header Badge */}
          <div className="flex items-center justify-center mt-20 mb-8 animate-fade-in">
            <div className="flex items-center bg-gradient-to-r from-primary/20 to-accent/20 rounded-full px-6 py-3 border border-primary/30 backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-primary mr-3 animate-pulse" />
              <span className="text-primary font-bold tracking-wider uppercase text-sm">
                AI-Powered Developer & Designer
              </span>
              <Brain className="w-6 h-6 text-accent ml-3 animate-pulse" />
            </div>
          </div>
          
          {/* Enhanced Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight animate-slide-up max-w-5xl mx-auto">
            Hi, I'm{" "}
            <span className="text-gradient relative">
              Arisha Mumtaz
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
            </span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl font-light text-muted-foreground">
              Building Tomorrow with{" "}
              <span className="text-gradient font-black">Artificial Intelligence</span>
            </span>
          </h1>
          
          {/* Enhanced Description */}
          <div className="max-w-5xl mx-auto mb-12 animate-fade-in-up">
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-6 leading-relaxed">
              Elite <span className="text-primary font-bold">UI/UX Designer</span> & 
              <span className="text-accent font-bold"> Full-Stack Developer</span> specializing in{" "}
              <span className="text-primary-glow font-black">AI-powered development tools</span>.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Crafting revolutionary digital experiences with{" "}
              <span className="text-primary font-semibold">Replit AI</span>,{" "}
              <span className="text-accent font-semibold">Cursor IDE</span>,{" "}
              <span className="text-primary-glow font-semibold">Lovable</span>, and{" "}
              <span className="text-primary-glow font-semibold">MGX</span>, and{" "}
              
              <span className="text-ACCENT font-semibold">cutting-edge tools</span>.
            </p>
            <div className="flex items-center justify-center mt-6 space-x-6">
              <div className="flex items-center text-primary">
                <Star className="w-5 h-5 mr-2 fill-current" />
                <span className="font-semibold">5+ Years Experience</span>
              </div>
              <div className="flex items-center text-accent">
                <Zap className="w-5 h-5 mr-2" />
                <span className="font-semibold">10+ AI Projects</span>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-bounce-in">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              size="lg" 
              className="btn-ai text-xl px-10 py-6 h-auto ai-glow group transform hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="mr-3 w-6 h-6 animate-pulse" />
              View My AI Projects
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button 
              onClick={downloadResume}
              variant="outline" 
              size="lg" 
              className="text-xl px-10 py-6 h-auto border-2 border-primary/40 hover:border-primary hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm"
            >
              <Download className="mr-3 w-6 h-6" />
              Download Resume
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in-delayed">
            <p className="text-sm text-muted-foreground mt-3 mb-4">Trusted by clients worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <span className="text-xs font-medium">AI Development</span>
              <span className="text-xs font-medium">•</span>
              <span className="text-xs font-medium">UI/UX Design</span>
              <span className="text-xs font-medium">•</span>
              <span className="text-xs font-medium">Full-Stack Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-50">
        <div className="w-8 h-12 border-2 border-primary/60 rounded-full flex justify-center backdrop-blur-sm bg-background/20">
          <div className="w-2 h-4 bg-gradient-to-b from-primary to-accent rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-xs text-muted-foreground mt-2 mb-3 text-center font-medium">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
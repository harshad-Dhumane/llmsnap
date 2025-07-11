import { Globe, Mail, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DomainCard = () => {
  const handleContactSeller = () => {
    window.location.href = "mailto:llmsnapwebsite@gmail.com";
  };

  return (
    <div className="relative">
      {/* Main Card */}
      <Card className="relative w-full max-w-2xl mx-auto p-12 text-center shadow-elegant hover:shadow-glow transition-all duration-700 animate-scale-in bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden">
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-secondary opacity-50 rounded-lg" />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-30" />
        
        <div className="relative z-10">
          {/* Animated Icon Container */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-glow animate-glow">
                <Globe className="w-10 h-10 text-white" />
              </div>
              {/* Floating sparkles around icon */}
              <div className="absolute -top-2 -right-2 animate-pulse-glow">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>

          {/* Domain Name with enhanced typography */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-black mb-2 bg-gradient-hero bg-clip-text text-transparent animate-fade-in-up leading-tight">
              llmsnap.com
            </h1>
            <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full animate-fade-in" />
          </div>

          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary rounded-full text-white text-sm font-semibold mb-6 animate-fade-in shadow-soft">
            <Sparkles className="w-4 h-4" />
            Premium Domain
          </div>

          {/* Subtitle with better spacing */}
          <p className="text-2xl md:text-3xl mb-8 text-foreground/80 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            This premium domain is for sale.
          </p>

          {/* Enhanced Description */}
          <div className="max-w-lg mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Interested in acquiring this domain? Reach out to discuss this exciting opportunity.
            </p>
            <p className="text-sm text-muted-foreground/70">
              Perfect for AI, ML, or tech startups looking for a memorable brand.
            </p>
          </div>

          {/* Enhanced Contact Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={handleContactSeller}
              size="lg"
              className="group bg-gradient-hero hover:shadow-glow transition-all duration-500 transform hover:scale-105 text-lg py-6 px-8 font-semibold rounded-xl border-0 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Mail className="w-5 h-5 mr-3" />
              Contact Seller
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex justify-center items-center gap-6 mt-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Verified Domain
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Instant Transfer
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DomainCard;
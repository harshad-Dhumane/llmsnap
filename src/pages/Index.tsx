import DomainCard from "@/components/DomainCard";
import FloatingElements from "@/components/FloatingElements";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-secondary overflow-hidden">
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(255,255,255,0.15)_1px,_transparent_0)] bg-[size:40px_40px] opacity-30" />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        {/* Header decoration */}
        <div className="flex items-center gap-2 mb-8 animate-fade-in">
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            Premium Domain Marketplace
          </span>
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
        </div>

        {/* Main Domain Card */}
        <div className="animate-fade-in-up mb-12">
          <DomainCard />
        </div>

        {/* Enhanced Contact Information */}
        <div className="text-center animate-fade-in-up space-y-2" style={{ animationDelay: '1s' }}>
          <p className="text-muted-foreground text-sm font-medium">
            Direct Contact
          </p>
          <a 
            href="mailto:llmsnapwebsite@gmail.com"
            className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium text-sm hover:underline"
          >
            llmsnapwebsite@gmail.com
          </a>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground/50 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          Secure • Verified • Instant Transfer Available
        </div>
      </div>
    </div>
  );
};

export default Index;

import { Globe, Mail, Sparkles, Star } from "lucide-react";

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-32 right-16 w-6 h-6 bg-gradient-hero rounded-lg animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-gradient-primary rounded-full animate-float opacity-30" style={{ animationDelay: '0.5s' }} />
      
      {/* Floating icons */}
      <div className="absolute top-40 right-32 animate-float opacity-20" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="w-5 h-5 text-primary" />
      </div>
      <div className="absolute bottom-60 left-32 animate-float opacity-20" style={{ animationDelay: '2.5s' }}>
        <Star className="w-4 h-4 text-primary" />
      </div>
    </div>
  );
};

export default FloatingElements;
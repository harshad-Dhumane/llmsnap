import DomainCard from "@/components/DomainCard";
import FloatingElements from "@/components/FloatingElements";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Zap, TrendingUp, Globe, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = "Interest in LLMSnap.com Domain";
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:llmsnapwebsite@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="relative min-h-screen bg-gradient-secondary overflow-hidden">
      {/* Floating background elements */}
      <FloatingElements />
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(255,255,255,0.15)_1px,_transparent_0)] bg-[size:40px_40px] opacity-30" />
      
      {/* Main content */}
      <div className="relative z-10 px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-screen max-w-6xl mx-auto">
          {/* Header decoration */}
          <div className="flex items-center gap-2 mb-8 animate-fade-in">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
              Premium AI Domain for Sale
            </span>
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          </div>

          {/* Main Headline */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent animate-shimmer">
              LLMSnap.com
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-2">
              Premium AI Domain for Sale
            </h2>
            <p className="text-lg text-muted-foreground/80">
              Instant brand recognition for your AI/ML startup
            </p>
          </div>

          {/* Main Domain Card */}
          <div className="animate-fade-in-up mb-16" style={{ animationDelay: '0.3s' }}>
            <DomainCard />
          </div>
        </div>

        {/* Value Proposition Sections */}
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Why This Domain is Valuable */}
          <section className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why LLMSnap.com is Valuable
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The perfect fusion of cutting-edge AI technology and instant action
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:scale-105 transition-all duration-300 glass-effect">
                <CardContent className="p-6 text-center">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">LLM + Snap</h4>
                  <p className="text-muted-foreground">
                    "Large Language Model" meets "instant action" - perfect for AI tools that deliver immediate results
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group hover:scale-105 transition-all duration-300 glass-effect">
                <CardContent className="p-6 text-center">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Short & Memorable</h4>
                  <p className="text-muted-foreground">
                    Only 9 characters, easy to remember, type, and share. Perfect for branding and marketing
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group hover:scale-105 transition-all duration-300 glass-effect">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Premium .com</h4>
                  <p className="text-muted-foreground">
                    The gold standard of domains. Builds trust, credibility, and search engine authority
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Use Cases */}
          <section className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Perfect for These Applications
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Endless possibilities for AI-powered businesses and startups
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "AI Chat Platforms",
                "Prompt Engineering Tools", 
                "ML Model APIs",
                "AI Content Generation",
                "Smart Automation SaaS",
                "AI Training Platforms",
                "LLM Integration Services",
                "AI Analytics Dashboards"
              ].map((useCase, index) => (
                <Card key={index} className="group hover:scale-105 transition-all duration-300 glass-effect">
                  <CardContent className="p-4 text-center">
                    <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-3"></div>
                    <p className="font-medium text-sm">{useCase}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Future Value */}
          <section className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <Card className="glass-effect">
              <CardContent className="p-8 md:p-12 text-center">
                <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Future-Proof Investment
                </h3>
                <div className="max-w-4xl mx-auto space-y-4 text-muted-foreground text-lg">
                  <p>
                    The AI market is projected to reach <strong className="text-primary">$1.8 trillion by 2030</strong>. 
                    Premium AI-related domains are becoming increasingly valuable as the industry explodes.
                  </p>
                  <p>
                    LLMSnap.com positions your brand at the forefront of the AI revolution, providing instant 
                    credibility and memorability in a crowded marketplace.
                  </p>
                  <p className="text-primary font-semibold">
                    Secure this premium domain before AI domain prices soar even higher.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact Form */}
          <section className="animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Ready to Own LLMSnap.com?
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Get in touch to discuss pricing and secure this premium domain
              </p>
            </div>
            
            <Card className="max-w-2xl mx-auto glass-effect">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        Your Name
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground block mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Message
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your project and interest in LLMSnap.com..."
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full text-lg py-6">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Seller
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Or email us directly:
                  </p>
                  <a 
                    href="mailto:llmsnapwebsite@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium hover:underline"
                  >
                    llmsnapwebsite@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Instant Transfer Note */}
          <section className="animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
            <Card className="glass-effect border-primary/20">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  Verified & Ready for Instant Transfer
                </h4>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  This domain is fully verified and ready for immediate handover. We use secure, 
                  escrow-protected transfers to ensure a smooth and safe transaction for both parties.
                </p>
                <div className="flex justify-center items-center gap-4 mt-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Secure Transfer
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Escrow Protected
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    24-48hr Delivery
                  </span>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-20 text-xs text-muted-foreground/50">
          Premium Domain • Secure Transaction • Professional Service
        </div>
      </div>
    </div>
  );
};

export default Index;

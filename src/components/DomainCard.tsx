import { Globe, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DomainCard = () => {
  const handleContactSeller = () => {
    window.location.href = "mailto:llmsnapwebsite@gmail.com";
  };

  return (
    <Card className="w-full max-w-lg mx-auto p-8 text-center shadow-elegant hover:shadow-hover transition-all duration-300 animate-scale-in">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
          <Globe className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Domain Name */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-domain-text">
        llmsnap.com
      </h1>

      {/* Subtitle */}
      <p className="text-xl mb-6 text-description-text font-medium">
        This premium domain is for sale.
      </p>

      {/* Description */}
      <p className="text-description-text mb-8 leading-relaxed">
        Interested in acquiring this domain? Reach out to discuss this
        exciting opportunity.
      </p>

      {/* Contact Button */}
      <Button 
        onClick={handleContactSeller}
        className="w-full bg-gradient-primary hover:shadow-hover transition-all duration-300 transform hover:scale-105 text-lg py-6 font-semibold"
      >
        <Mail className="w-5 h-5 mr-2" />
        Contact Seller
      </Button>
    </Card>
  );
};

export default DomainCard;
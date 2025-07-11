import DomainCard from "@/components/DomainCard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-8">
      {/* Main Domain Card */}
      <div className="animate-fade-in mb-12">
        <DomainCard />
      </div>

      {/* Contact Information */}
      <div className="animate-fade-in text-center">
        <p className="text-contact-bg text-sm">
          Contact: llmsnapwebsite@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Index;

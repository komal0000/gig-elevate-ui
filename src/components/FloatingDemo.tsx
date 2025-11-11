import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full gradient-accent shadow-large flex items-center justify-center hover:scale-110 transition-transform duration-300 glow-teal"
      >
        {isOpen ? (
          <X className="text-primary-foreground" size={24} />
        ) : (
          <MessageCircle className="text-primary-foreground" size={24} />
        )}
      </button>

      {/* Popup Card */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50 w-80 bg-card rounded-2xl shadow-large p-6 animate-slide-up">
          <h3 className="text-xl font-bold text-card-foreground mb-2">
            Ready to Get Started?
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Schedule a free demo and see how e-HAZIR can transform your institution.
          </p>
          <Button className="w-full gradient-accent hover:opacity-90">
            Request Demo Now
          </Button>
        </div>
      )}
    </>
  );
};

export default FloatingDemo;

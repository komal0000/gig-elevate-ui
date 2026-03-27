import { MessageCircle } from "lucide-react";

interface FloatingDemoProps {
  onRequestDemo: () => void;
}

const FloatingDemo = ({ onRequestDemo }: FloatingDemoProps) => {
  return (
    <button
      onClick={onRequestDemo}
      aria-label="Request a demo"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full gradient-accent shadow-large flex items-center justify-center hover:scale-110 transition-transform duration-300 glow-teal"
    >
      <MessageCircle className="text-primary-foreground" size={24} />
    </button>
  );
};

export default FloatingDemo;

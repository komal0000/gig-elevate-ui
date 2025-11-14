import { ArrowRight, PlayCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useState } from "react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Technology background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 leading-tight">
            Innovating Solutions,{" "}
            <span className="text-accent">
              Empowering Education
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
            Transforming school operations through comprehensive digital solutions with E-Hazir - 
            automated attendance tracking, RFID technology, and smart school management systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button size="lg" className="gradient-accent hover:opacity-90 text-sm sm:text-base md:text-lg px-6 py-4 sm:px-8 sm:py-6 glow-teal">
              Request a Demo
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-sm sm:text-base md:text-lg px-6 py-4 sm:px-8 sm:py-6 border-2 border-accent bg-accent/10 text-accent hover:bg-accent hover:text-primary-foreground"
              onClick={() => setShowVideo(true)}
            >
              <PlayCircle className="mr-2" size={18} />
              Watch Video
            </Button>
          </div>

          {/* Video Modal */}
          {showVideo && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in p-4">
              <div className="relative w-full max-w-4xl">
                {/* <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowVideo(false);
                  }}
                  className="absolute -top-14 right-0 text-white hover:text-accent transition-all bg-black/70 rounded-full p-3 hover:bg-accent hover:scale-110"
                  aria-label="Close video"
                >
                  <X size={28} />
                </button> */}
                <div 
                  className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="E-Hazir School Management System Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div 
                className="absolute inset-0 -z-10" 
                onClick={() => setShowVideo(false)}
              />
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 mb-8 sm:mb-10 max-w-3xl mx-auto">
            {[
              { value: "50+", label: "Schools Target" },
              { value: "15+", label: "Active Clients" },
              { value: "99.9%", label: "System Uptime" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-effect rounded-xl p-4 sm:p-5 md:p-6 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;

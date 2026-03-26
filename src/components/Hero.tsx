import { ArrowRight, PlayCircle, X, Building2, Users, Activity, HeadphonesIcon } from "lucide-react";
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="gradient-accent hover:opacity-90 transition-opacity text-sm sm:text-base md:text-lg px-6 py-4 sm:px-8 sm:py-6"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-sm sm:text-base md:text-lg px-6 py-4 sm:px-8 sm:py-6 border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-primary-foreground"
              onClick={() => setShowVideo(true)}
            >
              <PlayCircle className="mr-2" size={18} />
              Book a Demo
            </Button>
          </div>

          {/* Video Modal */}
          {showVideo && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in p-4">
              <div className="relative w-full max-w-4xl">
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
          {/* Stats Capsule */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-full max-w-4xl px-4 sm:px-6">
            <div className="bg-[#24130a] rounded-b-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {[
                { icon: Building2, value: "50+", label: "Current Projects" },
                { icon: Users, value: "15+", label: "Active Clients" },
                { icon: Activity, value: "99.9%", label: "System Uptime" },
                { icon: HeadphonesIcon, value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-4 px-2 sm:px-4 w-full md:w-auto animate-fade-in pt-4 md:pt-0 first:pt-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-accent">
                    <stat.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="text-left">
                    <div className="text-xl sm:text-2xl font-bold text-white leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-white/70 whitespace-nowrap">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

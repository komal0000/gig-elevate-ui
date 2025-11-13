import { CheckCircle, Smartphone, Monitor, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const ProductShowcase = () => {
  const features = [
    "Real-time RFID attendance tracking",
    "GPS-enabled transport monitoring",
    "Comprehensive analytics dashboard",
    "Mobile app for parents & students",
    "Automated notifications & alerts",
    "Offline support capability",
  ];

  const highlights = [
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Access anywhere, anytime on any device",
    },
    {
      icon: Monitor,
      title: "Real-Time Data",
      description: "Live updates and instant synchronization",
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "Actionable insights from your data",
    },
  ];

  return (
    <section id="ehazir" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full mb-3 sm:mb-4">
              <span className="text-accent font-semibold text-xs sm:text-sm md:text-base">Our Flagship Product</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Introducing <span className="text-accent">e-HAZIR</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              A revolutionary smart education platform that transforms how schools manage 
              attendance, transportation, and student engagement.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left: Features */}
            <div className="animate-fade-in">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8">
                Powerful Features for Modern Education
              </h3>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 sm:gap-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                    <span className="text-sm sm:text-base md:text-lg text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-3 sm:p-4 shadow-soft animate-fade-in"
                    style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                  >
                    <highlight.icon className="text-accent mb-2" size={20} />
                    <h4 className="font-semibold text-sm sm:text-base text-card-foreground mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>

              <Button size="lg" className="gradient-accent hover:opacity-90 text-sm sm:text-base">
                Explore e-HAZIR
              </Button>
            </div>

            {/* Right: Dashboard Mockup */}
            <div className="relative animate-float">
              <div className="rounded-2xl overflow-hidden shadow-large">
                <img
                  src={dashboardMockup}
                  alt="e-HAZIR Dashboard"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-card rounded-xl p-4 sm:p-6 shadow-large max-w-[200px] sm:max-w-xs hidden md:block">
                <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">98.5%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Average attendance tracking accuracy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

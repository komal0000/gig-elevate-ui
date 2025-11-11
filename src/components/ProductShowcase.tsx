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
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-semibold">Our Flagship Product</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Introducing <span className="gradient-accent bg-clip-text text-transparent">e-HAZIR</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A revolutionary smart education platform that transforms how schools manage 
              attendance, transportation, and student engagement.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Features */}
            <div className="animate-fade-in">
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Powerful Features for Modern Education
              </h3>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-lg text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-4 shadow-soft animate-fade-in"
                    style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                  >
                    <highlight.icon className="text-accent mb-2" size={24} />
                    <h4 className="font-semibold text-card-foreground mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>

              <Button size="lg" className="gradient-accent hover:opacity-90">
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
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-large max-w-xs hidden md:block">
                <div className="text-3xl font-bold text-accent mb-2">98.5%</div>
                <div className="text-sm text-muted-foreground">
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

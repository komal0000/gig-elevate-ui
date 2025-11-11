import { Sparkles, Shield, WifiOff, MapPin } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Sparkles,
      title: "Innovation Leader",
      description:
        "We pioneer cutting-edge solutions tailored for Nepal's education sector, constantly evolving with the latest technology trends.",
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Shield,
      title: "Proven Reliability",
      description:
        "With 99.9% uptime and trusted by 50+ institutions, our systems are built for consistent, dependable performance.",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: WifiOff,
      title: "Offline Support",
      description:
        "Unique offline capability ensures uninterrupted operations even without internet connectivity, crucial for remote areas.",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description:
        "Based in Kathmandu with deep understanding of Nepali educational needs, we provide culturally relevant solutions and local support.",
      gradient: "from-accent/20 to-accent/5",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="text-accent">GIG Innovation</span>
            </h2>
            <div className="w-24 h-1 gradient-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine global technology standards with local expertise to deliver 
              solutions that truly understand your needs.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-500 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="text-primary-foreground" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    {reason.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card rounded-2xl shadow-medium p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
                Ready to Transform Your Institution?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join the growing number of educational institutions that trust GIG Innovation 
                for their digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 gradient-accent text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  Schedule a Demo
                </button>
                <button className="px-8 py-3 border-2 border-border rounded-lg font-semibold text-foreground hover:bg-muted transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

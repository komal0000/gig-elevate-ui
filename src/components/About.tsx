import { Target, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize education and business operations through cutting-edge technology solutions.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Expert professionals dedicated to delivering innovative and reliable solutions.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing boundaries to create smarter, more efficient systems.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering world-class quality in every project we undertake.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-accent">GIG Innovation</span>
            </h2>
            <div className="w-24 h-1 gradient-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded in 2023 and based in Kathmandu, Nepal, GIG Innovation & Consultancy Pvt. Ltd. 
              is at the forefront of technological innovation in education and business automation.
            </p>
          </div>

          {/* Story */}
          <div className="bg-card rounded-2xl shadow-medium p-8 md:p-12 mb-12 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">
              Our Story
            </h3>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              GIG Innovation & Consultancy was born from a vision to bridge the gap between 
              traditional educational institutions and modern technology. We recognized the need 
              for smart, efficient, and reliable systems that could transform how schools and 
              businesses operate.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through our flagship product e-HAZIR, we've pioneered RFID-based attendance tracking, 
              GPS monitoring, and comprehensive school management solutions that serve thousands of 
              students and educators across Nepal. Our commitment to innovation, coupled with deep 
              understanding of local needs, makes us the trusted partner for digital transformation.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-4">
                  <value.icon className="text-primary-foreground" size={28} />
                </div>
                <h4 className="text-xl font-semibold text-card-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Target, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Digitize administrative workflows in schools, enhancing transparency, accuracy, and operational efficiency.",
    },
    {
      icon: Users,
      title: "Expert Leadership",
      description: "Founded by Mr. Sandip Giri (Management) and Er. Jibit Khanal (Technical Excellence) for sustainable growth.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Aligned with Digital Nepal Framework, promoting digital literacy and institutional accountability.",
    },
    {
      icon: Award,
      title: "Impact",
      description: "Targeting 50+ schools digitization in first year, empowering students, teachers, and parents.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              About <span className="text-accent">GIG Innovation</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 gradient-accent mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Founded by Mr. Sandip Giri and Er. Jibit Khanal, headquartered in Damak-4, Jhapa, 
              GIG Innovation & Consultancy Pvt. Ltd. leads digital transformation in Nepal's education sector.
            </p>
          </div>

          {/* Story */}
          <div className="bg-card rounded-2xl shadow-medium p-6 sm:p-8 md:p-12 mb-10 sm:mb-12 animate-fade-in">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-card-foreground mb-4 sm:mb-6">
              Our Story
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              Gig Innovation and Consultancy Pvt. Ltd. embodies the vision of "Innovating Solutions, 
              Empowering Education." Combining strong managerial leadership with advanced technical 
              expertise, we deliver innovative, practical solutions in IT and school management systems.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Our flagship product E-Hazir transforms traditional school operations into a comprehensive 
              digital ecosystem, integrating automated attendance tracking, assignment management, library 
              operations, accounting, communication, and safety monitoring. With offline RFID functionality 
              and mobile applications, we ensure accessibility for both urban and rural schools across Nepal.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 sm:p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg gradient-accent flex items-center justify-center mb-3 sm:mb-4">
                  <value.icon className="text-primary-foreground" size={24} />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-card-foreground mb-2 sm:mb-3">
                  {value.title}
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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

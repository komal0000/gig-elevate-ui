import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      bio: "15+ years in EdTech with a passion for innovation in education.",
      image: "👨‍💼",
    },
    {
      name: "Anita Shrestha",
      position: "CTO",
      bio: "Expert in RFID technology and IoT solutions for educational institutions.",
      image: "👩‍💻",
    },
    {
      name: "Suresh Malla",
      position: "Head of Product",
      bio: "Dedicated to creating user-centric solutions that solve real problems.",
      image: "👨‍🎓",
    },
    {
      name: "Priya Tamang",
      position: "Customer Success Manager",
      bio: "Committed to ensuring every client achieves their goals with our platform.",
      image: "👩‍💼",
    },
  ];

  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="gradient-accent bg-clip-text text-transparent">Team</span>
            </h2>
            <div className="w-24 h-1 gradient-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A dedicated group of professionals passionate about transforming education 
              through technology.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
                  <div className="text-8xl">{member.image}</div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Linkedin size={20} className="text-primary" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Mail size={20} className="text-primary" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-1">
                    {member.name}
                  </h3>
                  <div className="text-accent font-medium mb-3">
                    {member.position}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Join Team CTA */}
          <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card rounded-2xl shadow-medium p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Want to Join Our Team?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals who share our passion 
                for innovation in education technology.
              </p>
              <button className="px-8 py-3 gradient-accent text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

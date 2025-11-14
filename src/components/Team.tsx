import { Linkedin, Mail } from "lucide-react";
import sandipImg from "../assets/team/sandip.jpeg";
import jibitImg from "../assets/team/jibit.jpeg";
import sirjanImg from "../assets/team/sirjan.jpeg";

const Team = () => {
  const team = [
    {
      name: "Mr. Sandip Giri",
      position: "Co-Founder",
      bio: "Strategic leadership, business partnerships, financial oversight, and policy formulation with extensive entrepreneurship experience.",
      image: sandipImg,
    },
    {
      name: "Er. Jibit Khanal",
      position: "Co-Founder & Technical Lead",
      bio: "Technical supervision, automation system integration, product innovation, and quality assurance expertise.",
      image: jibitImg,
    },
    {
      name: "Srijan Adhikari",
      position: "Investor & Strategic Advisor",
      bio: "Master's in Sociology from Tribhuvan University. Expert in educational counseling, IELTS instruction, and international education guidance with extensive cross-cultural experience.",
      image: sirjanImg,
    },
    {
      name: "Chhatraman Shrestha",
      position: "CTO and Head of Development",
      bio: "Software development, system testing, and maintenance of E-Hazir modules.",
      image: "👨‍🎓",
    },
    {
      name: "Krishna Siptungkha Rai",
      position: "Training & Customer Success",
      bio: "User training, after-sales support, and client satisfaction management.",
      image: "👩‍💼",
    },
  ];

  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Meet Our <span className="text-accent">Team</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 gradient-accent mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              A dedicated group of professionals passionate about transforming education 
              through technology.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
                  {typeof member.image === 'string' && member.image.startsWith('http') || member.image.includes('/') ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-6xl sm:text-7xl md:text-8xl">{member.image}</div>
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4">
                    <a
                      href="#"
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Linkedin size={18} className="text-primary" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-foreground rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Mail size={18} className="text-primary" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-card-foreground mb-1">
                    {member.name}
                  </h3>
                  <div className="text-accent font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                    {member.position}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Join Team CTA */}
          <div className="mt-12 sm:mt-16 text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card rounded-2xl shadow-medium p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-3 sm:mb-4">
                Want to Join Our Team?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6 px-2">
                We're always looking for talented individuals who share our passion 
                for innovation in education technology.
              </p>
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base gradient-accent text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
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

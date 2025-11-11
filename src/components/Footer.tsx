import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    Products: [
      { name: "e-HAZIR", href: "#ehazir" },
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#" },
      { name: "Demo", href: "#" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#" },
      { name: "Blog", href: "#" },
      { name: "FAQs", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Disclaimer", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">GIG Innovation</span>
                <span className="text-sm opacity-80">& Consultancy</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Empowering education and businesses across Nepal with innovative 
              RFID-based solutions and smart automation systems.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span>+977-1-XXXXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span>info@giginnovation.com.np</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-primary-foreground/70 text-sm">
              © 2023-{new Date().getFullYear()} GIG Innovation & Consultancy Pvt. Ltd. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

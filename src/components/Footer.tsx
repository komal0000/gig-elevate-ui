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
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg gradient-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg sm:text-xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg leading-tight">GIG Innovation</span>
                <span className="text-xs sm:text-sm opacity-80">& Consultancy</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Innovating Solutions, Empowering Education. Transforming school operations 
              through E-Hazir digital ecosystem across Nepal.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-accent" />
                <span>Damak-4, Jhapa, Koshi Province</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-accent" />
                <span>Contact for details</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-accent" />
                <span>info@giginnovation.com.np</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-primary-foreground/80 hover:text-accent transition-colors"
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
        <div className="border-t border-primary-foreground/20 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            {/* Copyright */}
            <p className="text-primary-foreground/70 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} GIG Innovation & Consultancy Pvt. Ltd. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={16} />
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

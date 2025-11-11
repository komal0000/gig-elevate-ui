import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Kathmandu, Nepal",
      link: "#",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+977-1-XXXXXXX",
      link: "tel:+9771XXXXXXX",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@giginnovation.com.np",
      link: "mailto:info@giginnovation.com.np",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in <span className="gradient-accent bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 gradient-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your institution? Let's discuss how we can help you 
              achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <p className="text-muted-foreground mb-8">
                  We're here to answer any questions you may have about our products 
                  and services. Reach out to us and we'll respond as soon as we can.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="text-primary-foreground" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground mb-1">
                        {info.title}
                      </div>
                      <div className="text-muted-foreground">{info.content}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden shadow-medium h-64 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-accent mx-auto mb-2" size={48} />
                  <p className="text-muted-foreground">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card rounded-2xl shadow-large p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+977-XXX-XXXXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-accent hover:opacity-90"
                  >
                    Send Message
                    <Send className="ml-2" size={20} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

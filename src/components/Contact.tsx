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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const APP_ID = 'AKfycbwxDky4GnmcEnsifpV2n3SfWLW5-0LCJlDv8bJH3H09Tr075w1ynTOItLPiz72ZJ51QHA';
    const baseURL = `https://script.google.com/macros/s/${APP_ID}/exec`;

    // Create FormData - field names must match your spreadsheet column headers exactly
    const submitData = new FormData();
    submitData.append('Name', formData.name);
    submitData.append('Email', formData.email);
    submitData.append('Message', formData.phone ? `Phone: ${formData.phone}\n\n${formData.message}` : formData.message);
    // 'Created_at' column will be automatically filled by the script (make sure it's checking for 'Created_at' not 'Date')
    console.log('Submitting form data:', {
      Name: formData.name,
      Email: formData.email,
      Message: formData.phone ? `Phone: ${formData.phone}\n\n${formData.message}` : formData.message,
    });
    try {
      const res = await fetch(baseURL, {
        method: 'POST',
        body: submitData,
        mode: 'no-cors', // Required for Google Apps Script
      });

      // With no-cors mode, we can't read the response, so we assume success
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error('Error during form submission:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Damak-4, Jhapa, Koshi Province, Nepal",
      link: "#",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "Contact for details",
      link: "#",
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
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Get in <span className="text-accent">Touch</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 gradient-accent mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Ready to transform your institution? Let's discuss how we can help you 
              achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                  Contact Information
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
                  We're here to answer any questions you may have about our products 
                  and services. Reach out to us and we'll respond as soon as we can.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-card-foreground mb-1">
                        {info.title}
                      </div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{info.content}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="rounded-xl overflow-hidden shadow-medium h-48 sm:h-56 md:h-64 bg-muted flex items-center justify-center">
                <div className="text-center px-4">
                  <MapPin className="text-accent mx-auto mb-2" size={40} />
                  <p className="text-sm sm:text-base text-muted-foreground font-semibold">Damak-4, Jhapa</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Koshi Province, Nepal</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card rounded-2xl shadow-large p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-card-foreground mb-5 sm:mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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

import {
  Users,
  FileText,
  BookOpen,
  CreditCard,
  Bus,
  Calendar,
  Bell,
  BarChart,
  Shield,
  Zap,
  Cloud,
  Smartphone,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Attendance Management",
      description: "RFID-based automatic attendance tracking with real-time updates and notifications.",
    },
    {
      icon: FileText,
      title: "Exam Management",
      description: "Comprehensive exam scheduling, results management, and performance analytics.",
    },
    {
      icon: BookOpen,
      title: "Library System",
      description: "Digital library management with book tracking and automated reminders.",
    },
    {
      icon: CreditCard,
      title: "Smart ID Cards",
      description: "RFID-enabled student ID cards for seamless access and identification.",
    },
    {
      icon: Bus,
      title: "Transport Tracking",
      description: "GPS-based real-time vehicle tracking for student safety and route optimization.",
    },
    {
      icon: Calendar,
      title: "Leave Management",
      description: "Automated leave requests, approvals, and attendance adjustments.",
    },
    {
      icon: Bell,
      title: "SMS & Notifications",
      description: "Instant alerts to parents and staff about attendance, events, and updates.",
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Comprehensive reports and insights for data-driven decision making.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-grade security with encrypted data and regular backups.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for handling thousands of records instantly.",
    },
    {
      icon: Cloud,
      title: "Cloud-Based",
      description: "Access your data securely from anywhere with cloud synchronization.",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native iOS and Android apps for parents, students, and teachers.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Comprehensive <span className="text-accent">Features</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 gradient-accent mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Everything you need to manage your educational institution efficiently, 
              all in one powerful platform.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-4 sm:p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="text-accent" size={20} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

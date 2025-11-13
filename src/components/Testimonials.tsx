import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Dr. Ramesh Sharma",
      position: "Principal",
      school: "Bright Future Secondary School, Kathmandu",
      content:
        "e-HAZIR has completely transformed how we manage attendance and student tracking. The RFID system is incredibly accurate, and parents love receiving real-time notifications. It's been a game-changer for our institution.",
      rating: 5,
    },
    {
      name: "Sita Adhikari",
      position: "School Administrator",
      school: "Himalayan International Academy, Pokhara",
      content:
        "The offline capability is what sold us. Being in a remote area, internet connectivity isn't always reliable. GIG's solution works seamlessly even without internet, syncing everything once we're back online.",
      rating: 5,
    },
    {
      name: "Prakash Thapa",
      position: "IT Director",
      school: "Nepal Public School, Lalitpur",
      content:
        "Implementation was smooth, and the support team is outstanding. They understood our unique requirements and customized the system perfectly. The analytics dashboard gives us insights we never had before.",
      rating: 5,
    },
    {
      name: "Maya Gurung",
      position: "Transport Coordinator",
      school: "Valley View School, Bhaktapur",
      content:
        "GPS tracking has made managing our school buses so much easier. Parents can see exactly where the bus is, and we can optimize routes. Safety concerns have significantly decreased since implementation.",
      rating: 5,
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              What Our <span className="text-accent">Clients Say</span>
            </h2>
            <div className="w-20 sm:w-24 h-1 gradient-accent mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Trusted by leading educational institutions across Nepal for reliable, 
              innovative solutions.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-large p-6 sm:p-8 md:p-12 animate-fade-in">
              {/* Quote Icon */}
              <Quote className="text-accent/20 mb-4 sm:mb-6" size={48} />

              {/* Content */}
              <div className="mb-6 sm:mb-8">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-card-foreground leading-relaxed mb-4 sm:mb-6">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="text-accent fill-accent"
                      size={18}
                    />
                  ))}
                </div>
              </div>

              {/* Author */}
              <div className="border-t border-border pt-4 sm:pt-6">
                <div className="font-bold text-base sm:text-lg text-card-foreground">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  {testimonials[currentIndex].position}
                </div>
                <div className="text-accent font-medium mt-1 text-sm sm:text-base">
                  {testimonials[currentIndex].school}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="w-12 h-12 rounded-full"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="w-12 h-12 rounded-full"
              >
                <ChevronRight size={20} />
              </Button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-accent"
                      : "bg-border hover:bg-accent/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Client Logos Section */}
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">Trusted by leading institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 opacity-50">
              {["School 1", "School 2", "School 3", "School 4", "School 5"].map(
                (school, index) => (
                  <div
                    key={index}
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-muted rounded-lg text-foreground font-semibold text-xs sm:text-sm md:text-base"
                  >
                    {school}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

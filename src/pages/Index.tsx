import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductShowcase from "@/components/ProductShowcase";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingDemo from "@/components/FloatingDemo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ProductShowcase />
      <Features />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
      <FloatingDemo />
    </div>
  );
};

export default Index;

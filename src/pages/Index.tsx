import { useState } from "react";
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
import RequestDemoModal from "@/components/RequestDemoModal";

const Index = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onRequestDemo={() => setShowDemoModal(true)} />
      <Hero />
      <About />
      <ProductShowcase />
      <Features />
      <WhyChooseUs onRequestDemo={() => setShowDemoModal(true)} />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
      <FloatingDemo onRequestDemo={() => setShowDemoModal(true)} />
      <RequestDemoModal
        isOpen={showDemoModal}
        onClose={() => setShowDemoModal(false)}
      />
    </div>
  );
};

export default Index;

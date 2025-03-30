import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FeatureSection from "@/components/FeatureSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { initAnimations } from "@/lib/animations";

const Home = () => {
  useEffect(() => {
    // Initialize all animations when component mounts
    initAnimations();
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <FeatureSection />
      <ContactSection />
      <Footer />
      <Lightbox />
    </div>
  );
};

export default Home;

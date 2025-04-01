import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FeatureSection from "@/components/FeatureSection";
import CompareSection from "@/components/CompareSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { initAnimations } from "@/lib/animations";

const Home = () => {
  useEffect(() => {
    // Initialize all animations when component mounts
    initAnimations();
    
    // Prüfen, ob wir von der News-Seite kommen und zu einem Bereich scrollen sollen
    const scrollTarget = sessionStorage.getItem("scrollTarget");
    if (scrollTarget) {
      setTimeout(() => {
        const targetElement = document.querySelector(scrollTarget);
        if (targetElement) {
          const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });
          
          // Ziel aus dem sessionStorage entfernen
          sessionStorage.removeItem("scrollTarget");
        }
      }, 100); // Kurze Verzögerung, um sicherzustellen, dass die Seite fertig geladen ist
    }
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <FeatureSection />
      <CompareSection />
      <ContactSection />
      <Footer />
      <Lightbox />
    </div>
  );
};

export default Home;

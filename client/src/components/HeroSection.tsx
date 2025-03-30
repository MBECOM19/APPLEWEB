import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax effect setup
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPosition = window.scrollY;
        const bgPosition = scrollPosition * 0.5;
        sectionRef.current.style.backgroundPositionY = `${bgPosition}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLearnMore = (e: React.MouseEvent) => {
    e.preventDefault();
    const iPhonesSection = document.getElementById('iphones');
    if (iPhonesSection) {
      const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
      const targetPosition = iPhonesSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1588058365548-9ded1f5f6d5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20 dark:bg-opacity-60"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4 animate-fade-in">iPhone 15 Pro</h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto animate-fade-in">Titanium. So strong. So light. So Pro.</p>
        <button 
          className="bg-apple-blue hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-slide-up"
          onClick={handleLearnMore}
        >
          Mehr erfahren
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

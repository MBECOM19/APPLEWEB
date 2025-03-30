import { useState, useEffect } from "react";
import useDarkMode from "@/hooks/useDarkMode";
import useScrollEffect from "@/hooks/useScrollEffect";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const isScrolled = useScrollEffect(10);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      const targetId = href;
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
        
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "navbar-blur bg-white/80 dark:bg-black/80 shadow-md" : ""
    }`} id="navbar">
      <nav className="py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center">
          <a href="#home" className="transform transition-transform hover:scale-110 duration-300" onClick={handleNavLinkClick}>
            <svg className="h-8 w-8 fill-current text-apple-darkgray dark:text-white" viewBox="0 0 17 21" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.7 0.5C9.4 0.5 10.7 0 11.8 0C14.3 0 15.2 1.7 15.2 1.7C15.2 1.7 13.4 2.5 13.4 4.7C13.4 7.2 15.6 7.8 15.6 7.8C15.6 7.8 13.8 12.4 11.6 12.4C10.6 12.4 9.7 11.7 8.6 11.7C7.4 11.7 6.2 12.4 5.5 12.4C3.4 12.4 0 8.1 0 5.2C0 2.3 2.5 0.8 4.8 0.8C6.3 0.9 7.5 1.7 8.7 0.5ZM11.3 0C11.6 1.1 11 2.2 10.3 3C9.6 3.7 8.5 4.3 7.5 4.2C7.2 3.1 7.9 2 8.6 1.3C9.3 0.7 10.5 0.1 11.3 0Z"/>
            </svg>
          </a>
          <div className="hidden md:flex ml-10 space-x-6">
            {['home', 'iphones', 'macbooks', 'airpods', 'ipads', 'kontakt'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="text-sm hover:text-apple-blue transition-colors"
                onClick={handleNavLinkClick}
              >
                {item === 'home' ? 'Home' : 
                 item === 'iphones' ? 'iPhones' : 
                 item === 'macbooks' ? 'MacBooks' : 
                 item === 'airpods' ? 'AirPods' : 
                 item === 'ipads' ? 'iPads' : 'Kontakt'}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            id="darkModeToggle" 
            className="p-2 rounded-full hover:bg-apple-lightgray dark:hover:bg-apple-darkgray transition-colors"
            onClick={toggleDarkMode}
          >
            <i className={`fa-solid ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>
          <button className="md:hidden" id="mobileMenuButton" onClick={toggleMobileMenu}>
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div id="mobileMenu" className={`px-6 py-4 bg-white dark:bg-black shadow-lg md:hidden ${mobileMenuOpen ? '' : 'hidden'}`}>
        <div className="flex flex-col space-y-4">
          {['home', 'iphones', 'macbooks', 'airpods', 'ipads', 'kontakt'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="text-sm hover:text-apple-blue transition-colors"
              onClick={handleNavLinkClick}
            >
              {item === 'home' ? 'Home' : 
               item === 'iphones' ? 'iPhones' : 
               item === 'macbooks' ? 'MacBooks' : 
               item === 'airpods' ? 'AirPods' : 
               item === 'ipads' ? 'iPads' : 'Kontakt'}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

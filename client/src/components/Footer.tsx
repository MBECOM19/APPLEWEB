const Footer = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
      }
    }
  };

  return (
    <footer className="bg-white dark:bg-black py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-medium text-lg mb-4">Produkte</h4>
            <ul className="space-y-2 text-apple-gray dark:text-gray-400">
              <li><a href="#iphones" className="hover:text-apple-blue transition-colors" onClick={handleLinkClick}>iPhone</a></li>
              <li><a href="#macbooks" className="hover:text-apple-blue transition-colors" onClick={handleLinkClick}>MacBook</a></li>
              <li><a href="#airpods" className="hover:text-apple-blue transition-colors" onClick={handleLinkClick}>AirPods</a></li>
              <li><a href="#ipads" className="hover:text-apple-blue transition-colors" onClick={handleLinkClick}>iPad</a></li>
              <li><a href="#" className="hover:text-apple-blue transition-colors">Apple Watch</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">Infos</h4>
            <ul className="space-y-2 text-apple-gray dark:text-gray-400">
              <li><a href="#" className="hover:text-apple-blue transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-apple-blue transition-colors">Nachhaltigkeit</a></li>
              <li><a href="#" className="hover:text-apple-blue transition-colors">Newsroom</a></li>
              <li><a href="#" className="hover:text-apple-blue transition-colors">Karriere</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">Service</h4>
            <ul className="space-y-2 text-apple-gray dark:text-gray-400">
              <li><a href="#" className="hover:text-apple-blue transition-colors">Apple Store</a></li>
              <li><a href="#" className="hover:text-apple-blue transition-colors">Genius Bar</a></li>
              <li><a href="#" className="hover:text-apple-blue transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-apple-blue transition-colors">AppleCare</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-apple-gray dark:text-gray-400">
              <li><a href="#" className="hover:text-apple-blue transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-apple-blue transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-apple-blue transition-colors">Nutzungsbedingungen</a></li>
              <li><a href="#" className="hover:text-apple-blue transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-apple-gray dark:text-gray-400 text-sm">© {new Date().getFullYear()} Apple Fanpage. Alle Rechte vorbehalten.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-apple-gray dark:text-gray-400 hover:text-apple-blue transition-colors">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="text-apple-gray dark:text-gray-400 hover:text-apple-blue transition-colors">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="text-apple-gray dark:text-gray-400 hover:text-apple-blue transition-colors">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="text-apple-gray dark:text-gray-400 hover:text-apple-blue transition-colors">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

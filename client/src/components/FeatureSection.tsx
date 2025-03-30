const FeatureSection = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal reveal-left">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Erlebe die Apple-Welt</h2>
            <p className="text-apple-gray dark:text-gray-400 mb-8 text-lg">
              Entdecke, wie unsere Produkte nahtlos zusammenarbeiten, um dein Leben einfacher und produktiver zu gestalten.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fa-solid fa-check text-apple-blue mt-1 mr-3"></i>
                <span>Nahtlose Integration zwischen allen Geräten</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check text-apple-blue mt-1 mr-3"></i>
                <span>Einfache Datensynchronisation über iCloud</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check text-apple-blue mt-1 mr-3"></i>
                <span>Höchste Sicherheitsstandards für deine Privatsphäre</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-check text-apple-blue mt-1 mr-3"></i>
                <span>Umweltfreundlich und nachhaltig produziert</span>
              </li>
            </ul>
          </div>
          <div className="reveal reveal-right">
            <img 
              src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Apple Ecosystem" 
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

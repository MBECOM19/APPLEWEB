import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initAnimations } from "@/lib/animations";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
  imageUrl: string;
  category: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Apple präsentiert neue MacBook Pro Modelle mit M3 Chip",
    date: "31.03.2025",
    content: "Apple hat heute die neue Generation von MacBook Pro Geräten vorgestellt, die mit dem revolutionären M3 Chip ausgestattet sind. Die neuen Modelle versprechen bis zu 40% mehr Leistung bei gleichzeitig verbesserter Akkulaufzeit.",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Produkte"
  },
  {
    id: 2,
    title: "iOS 19: Alle neuen Funktionen im Überblick",
    date: "28.03.2025",
    content: "Das kommende iOS 19 Update bringt zahlreiche neue Funktionen auf Ihr iPhone. Wir zeigen die wichtigsten Neuerungen und erklären, wie Sie diese optimal nutzen können.",
    imageUrl: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Software"
  },
  {
    id: 3,
    title: "Apple eröffnet neuen Flagship Store in Berlin",
    date: "25.03.2025",
    content: "Am Kudamm in Berlin hat Apple seinen neuesten und größten Store in Deutschland eröffnet. Das architektonisch beeindruckende Gebäude bietet auf drei Etagen alles, was das Apple-Herz begehrt.",
    imageUrl: "https://images.unsplash.com/photo-1631751932549-93038864ec8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Unternehmen"
  },
  {
    id: 4,
    title: "Apple Watch Series 11: Neue Gesundheitsfunktionen enthüllt",
    date: "20.03.2025",
    content: "Die kommende Apple Watch Series 11, die im Herbst erwartet wird, soll mit neuen Gesundheitsfunktionen ausgestattet sein, darunter ein verbessertes EKG und Blutdruckmessung.",
    imageUrl: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Produkte"
  },
  {
    id: 5,
    title: "AirPods Studio: Apples neue Over-Ear Kopfhörer",
    date: "15.03.2025",
    content: "Mit den AirPods Studio betritt Apple den Markt der Over-Ear Kopfhörer. Die Premium-Kopfhörer sollen mit aktiver Geräuschunterdrückung und räumlichem Audio überzeugen.",
    imageUrl: "https://images.unsplash.com/photo-1505236273555-aeec0cc81513?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    category: "Produkte"
  }
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [displayedNews, setDisplayedNews] = useState<NewsItem[]>(newsData);

  useEffect(() => {
    // Initialize animations when component is mounted
    initAnimations();

    // Filter news based on active category
    if (activeCategory) {
      setDisplayedNews(newsData.filter(item => item.category === activeCategory));
    } else {
      setDisplayedNews(newsData);
    }
  }, [activeCategory]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

  // Get unique categories
  const categories = Array.from(new Set(newsData.map(item => item.category)));

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Apple News</h1>
          
          {/* Category filter */}
          <div className="flex justify-center mb-12 flex-wrap gap-2">
            <button 
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === null 
                ? 'bg-apple-blue text-white' 
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(null)}
            >
              Alle
            </button>
            
            {categories.map(category => (
              <button 
                key={category}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category 
                  ? 'bg-apple-blue text-white' 
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* News grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedNews.map((item) => (
              <article 
                key={item.id} 
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02] hover:shadow-xl reveal"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-apple-blue">{item.category}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3">{item.title}</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{item.content}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-apple-blue hover:underline"
                  >
                    Weiterlesen
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          {displayedNews.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 dark:text-gray-400">Keine News in dieser Kategorie gefunden.</p>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
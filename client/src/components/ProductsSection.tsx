import { useState } from 'react';
import { products } from '@/data/products';

const ProductsSection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string } | null>(null);

  // Open lightbox with selected image
  const openLightbox = (fullImgSrc: string, altText: string) => {
    setSelectedImage({ src: fullImgSrc, alt: altText });
    // Send image info to lightbox component via custom event
    const lightboxEvent = new CustomEvent('openLightbox', { 
      detail: { src: fullImgSrc, alt: altText } 
    });
    window.dispatchEvent(lightboxEvent);
  };

  return (
    <section className="py-20 px-6 bg-apple-lightgray dark:bg-apple-darkgray">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 reveal reveal-up">Unsere Produkte</h2>
        
        {/* iPhones Section */}
        <div id="iphones" className="mb-20">
          <h3 className="text-2xl md:text-3xl font-medium mb-10 reveal reveal-left">iPhone</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.iphones.map((iphone, index) => (
              <div 
                key={`iphone-${index}`} 
                className="product-card bg-white dark:bg-apple-darkgray rounded-2xl shadow-md hover:shadow-xl overflow-hidden reveal reveal-up"
              >
                <div 
                  className="relative h-60 overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(iphone.fullImg, iphone.name)}
                >
                  <img 
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" 
                    src={iphone.img} 
                    alt={iphone.name}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2">{iphone.name}</h4>
                  <p className="text-apple-gray dark:text-gray-400 mb-4">{iphone.description}</p>
                  <p className="font-medium mb-4">Ab €{iphone.price}</p>
                  <button className="text-apple-blue hover:underline font-medium">Mehr erfahren</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* MacBooks Section */}
        <div id="macbooks" className="mb-20">
          <h3 className="text-2xl md:text-3xl font-medium mb-10 reveal reveal-right">MacBook</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.macbooks.map((macbook, index) => (
              <div 
                key={`macbook-${index}`} 
                className="product-card bg-white dark:bg-apple-darkgray rounded-2xl shadow-md hover:shadow-xl overflow-hidden reveal reveal-up"
              >
                <div 
                  className="relative h-60 overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(macbook.fullImg, macbook.name)}
                >
                  <img 
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" 
                    src={macbook.img} 
                    alt={macbook.name}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2">{macbook.name}</h4>
                  <p className="text-apple-gray dark:text-gray-400 mb-4">{macbook.description}</p>
                  <p className="font-medium mb-4">Ab €{macbook.price}</p>
                  <button className="text-apple-blue hover:underline font-medium">Mehr erfahren</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* AirPods Section */}
        <div id="airpods" className="mb-20">
          <h3 className="text-2xl md:text-3xl font-medium mb-10 reveal reveal-left">AirPods</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.airpods.map((airpod, index) => (
              <div 
                key={`airpod-${index}`} 
                className="product-card bg-white dark:bg-apple-darkgray rounded-2xl shadow-md hover:shadow-xl overflow-hidden reveal reveal-up"
              >
                <div 
                  className="relative h-60 overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(airpod.fullImg, airpod.name)}
                >
                  <img 
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" 
                    src={airpod.img} 
                    alt={airpod.name}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2">{airpod.name}</h4>
                  <p className="text-apple-gray dark:text-gray-400 mb-4">{airpod.description}</p>
                  <p className="font-medium mb-4">€{airpod.price}</p>
                  <button className="text-apple-blue hover:underline font-medium">Mehr erfahren</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* iPads Section */}
        <div id="ipads">
          <h3 className="text-2xl md:text-3xl font-medium mb-10 reveal reveal-right">iPad</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.ipads.map((ipad, index) => (
              <div 
                key={`ipad-${index}`} 
                className="product-card bg-white dark:bg-apple-darkgray rounded-2xl shadow-md hover:shadow-xl overflow-hidden reveal reveal-up"
              >
                <div 
                  className="relative h-60 overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(ipad.fullImg, ipad.name)}
                >
                  <img 
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" 
                    src={ipad.img} 
                    alt={ipad.name}
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-medium mb-2">{ipad.name}</h4>
                  <p className="text-apple-gray dark:text-gray-400 mb-4">{ipad.description}</p>
                  <p className="font-medium mb-4">Ab €{ipad.price}</p>
                  <button className="text-apple-blue hover:underline font-medium">Mehr erfahren</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

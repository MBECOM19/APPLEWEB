import { useState, useEffect } from 'react';

const Lightbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState<{ src: string, alt: string } | null>(null);

  useEffect(() => {
    // Listen for custom lightbox event
    const handleOpenLightbox = (e: CustomEvent<{ src: string, alt: string }>) => {
      setImage({ src: e.detail.src, alt: e.detail.alt });
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('openLightbox', handleOpenLightbox as EventListener);

    return () => {
      window.removeEventListener('openLightbox', handleOpenLightbox as EventListener);
    };
  }, []);

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[1000] bg-black bg-opacity-80 flex justify-center items-center"
      onClick={handleBackdropClick}
    >
      <div className="max-w-[90%] max-h-[90%]">
        {image && <img src={image.src} alt={image.alt} className="max-w-full max-h-full" />}
      </div>
      <button 
        className="absolute top-6 right-6 text-white text-2xl"
        onClick={closeLightbox}
      >
        <i className="fa-solid fa-times"></i>
      </button>
    </div>
  );
};

export default Lightbox;

import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Formular unvollständig",
        description: "Bitte fülle alle Felder aus.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      const response = await apiRequest('POST', '/api/contact', formData);
      
      if (response.ok) {
        toast({
          title: "Nachricht gesendet",
          description: "Vielen Dank für deine Nachricht. Wir werden uns in Kürze bei dir melden.",
          variant: "default"
        });
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      toast({
        title: "Es ist ein Fehler aufgetreten",
        description: "Deine Nachricht konnte nicht gesendet werden. Bitte versuche es später noch einmal.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 px-6 bg-apple-lightgray dark:bg-apple-darkgray">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 reveal reveal-up">Kontaktiere uns</h2>
        <div className="bg-white dark:bg-black rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 reveal reveal-left">
              <h3 className="text-2xl font-medium mb-6">Schreib uns eine Nachricht</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-apple-darkgray focus:outline-none focus:ring-2 focus:ring-apple-blue" 
                    placeholder="Dein Name"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">E-Mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-apple-darkgray focus:outline-none focus:ring-2 focus:ring-apple-blue" 
                    placeholder="deine@email.de"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Nachricht</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-apple-darkgray focus:outline-none focus:ring-2 focus:ring-apple-blue" 
                    placeholder="Deine Nachricht..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-apple-blue hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
              </form>
            </div>
            <div className="bg-apple-blue p-8 md:p-12 text-white reveal reveal-right">
              <h3 className="text-2xl font-medium mb-6">Kontaktinformationen</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <i className="fa-solid fa-location-dot mt-1 mr-4 text-xl"></i>
                  <div>
                    <h4 className="font-medium mb-1">Adresse</h4>
                    <p>Apfelstraße 123, 10115 Berlin</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fa-solid fa-phone mt-1 mr-4 text-xl"></i>
                  <div>
                    <h4 className="font-medium mb-1">Telefon</h4>
                    <p>+49 30 1234567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fa-solid fa-envelope mt-1 mr-4 text-xl"></i>
                  <div>
                    <h4 className="font-medium mb-1">E-Mail</h4>
                    <p>info@apple-fanpage.de</p>
                  </div>
                </div>
                <div className="pt-6">
                  <h4 className="font-medium mb-4">Folge uns</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-xl hover:text-opacity-80 transition-opacity">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" className="text-xl hover:text-opacity-80 transition-opacity">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="text-xl hover:text-opacity-80 transition-opacity">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" className="text-xl hover:text-opacity-80 transition-opacity">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

interface DownloadItem {
  name: string;
  description: string;
  filename: string;
}

const downloads: DownloadItem[] = [
  {
    name: "iPhone 15 Pro",
    description: "Technische Daten, Spezifikationen und Features für das iPhone 15 Pro.",
    filename: "iphone15_datenblatt.pdf"
  },
  {
    name: "MacBook Pro",
    description: "Technische Daten, Spezifikationen und Features für das MacBook Pro.",
    filename: "macbook_pro_datenblatt.pdf"
  },
  {
    name: "iPad Pro",
    description: "Technische Daten, Spezifikationen und Features für das iPad Pro.",
    filename: "ipad_pro_datenblatt.pdf"
  },
  {
    name: "AirPods Pro",
    description: "Technische Daten, Spezifikationen und Features für die AirPods Pro.",
    filename: "airpods_pro_datenblatt.pdf"
  }
];

const DownloadSection = () => {
  return (
    <section id="downloads" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Datenblätter</h2>
        <p className="text-center text-lg mb-16 max-w-3xl mx-auto">
          Laden Sie die technischen Datenblätter zu unseren Produkten herunter, 
          um mehr über die Spezifikationen und Features zu erfahren.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {downloads.map((item, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-6">
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full">
                  <Download className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  asChild
                >
                  <a 
                    href={`/downloads/${item.filename}`} 
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Herunterladen
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
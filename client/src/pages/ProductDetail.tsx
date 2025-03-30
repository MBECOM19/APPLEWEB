import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { products, type Product } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ShoppingCart, Heart, Share2, Star } from "lucide-react";

const ProductDetail = () => {
  const [, setLocation] = useLocation();
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState("übersicht");
  
  // Normally we would use a route parameter, but for simplicity
  // we're using localStorage to pass the product data
  useEffect(() => {
    const productData = localStorage.getItem("selectedProduct");
    if (productData) {
      try {
        const product = JSON.parse(productData);
        setActiveProduct(product);
      } catch (error) {
        console.error("Error parsing product data", error);
      }
    } else {
      // Fallback to a default product if none is selected
      setActiveProduct(products.iphones[0]);
    }
  }, []);

  const handleGoBack = () => {
    setLocation("/");
  };

  if (!activeProduct) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="font-sans">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6 flex items-center"
            onClick={handleGoBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Übersicht
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-muted rounded-lg p-8 flex items-center justify-center">
              <img 
                src={activeProduct.fullImg} 
                alt={activeProduct.name} 
                className="max-h-[400px] object-contain" 
              />
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">{activeProduct.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="h-5 w-5 text-yellow-500 fill-yellow-500" 
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">127 Bewertungen</span>
              </div>
              
              <p className="text-xl font-semibold mb-6">
                {typeof activeProduct.price === 'number' 
                  ? `${activeProduct.price} €` 
                  : activeProduct.price}
              </p>
              
              <p className="text-muted-foreground mb-8">
                {activeProduct.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <Button className="flex-1">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  In den Warenkorb
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Verfügbarkeit</span>
                  <span className="text-green-600">Auf Lager</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Versand</span>
                  <span>Kostenlos ab 40€</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-medium">Garantie</span>
                  <span>2 Jahre</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Tabs */}
          <Tabs defaultValue="übersicht" className="mb-12" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="übersicht">Übersicht</TabsTrigger>
              <TabsTrigger value="technische-daten">Technische Daten</TabsTrigger>
              <TabsTrigger value="bewertungen">Bewertungen</TabsTrigger>
            </TabsList>
            
            <TabsContent value="übersicht" className="pt-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Produktübersicht</h3>
                <p>
                  Das {activeProduct.name} ist das neueste Gerät in der Apple-Produktlinie. 
                  Es kombiniert modernste Technologie mit dem eleganten Design, für das Apple bekannt ist.
                </p>
                
                <h4 className="text-xl font-semibold mt-8">Hauptmerkmale</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Außergewöhnliche Leistung für alltägliche Aufgaben und anspruchsvolle Anwendungen</li>
                  <li>Brillantes Display für ein herausragendes visuelles Erlebnis</li>
                  <li>Fortschrittliche Kamerasysteme für hochwertige Fotos und Videos</li>
                  <li>Lange Batterielaufzeit, die einen ganzen Tag hält</li>
                  <li>Nahtlose Integration mit anderen Apple-Produkten und -Diensten</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="technische-daten" className="pt-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Technische Daten</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Leistung</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Prozessor</span>
                        <span>A17 Pro / M2 Chip</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">RAM</span>
                        <span>8GB / 16GB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Speicher</span>
                        <span>128GB - 1TB</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Display</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Typ</span>
                        <span>Super Retina XDR</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Größe</span>
                        <span>6,1" / 14"</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Auflösung</span>
                        <span>2532 x 1170 px</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Kamera</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Hauptkamera</span>
                        <span>48 MP</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Ultraweitwinkel</span>
                        <span>12 MP</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Frontkamera</span>
                        <span>12 MP</span>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Akku</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Kapazität</span>
                        <span>3500 mAh</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Schnellladung</span>
                        <span>Bis zu 50% in 30 Min.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Drahtloses Laden</span>
                        <span>15W MagSafe</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="bewertungen" className="pt-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Kundenbewertungen</h3>
                <div className="flex items-center mb-6">
                  <div className="flex mr-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="h-6 w-6 text-yellow-500 fill-yellow-500" 
                      />
                    ))}
                  </div>
                  <span className="text-lg font-medium">4.9 von 5</span>
                  <span className="text-muted-foreground ml-2">(127 Bewertungen)</span>
                </div>
                
                {/* Sample Reviews */}
                <div className="space-y-6">
                  {[
                    {
                      name: "Marcel Schmidt",
                      date: "15.03.2024",
                      rating: 5,
                      comment: "Absolut begeistert von diesem Produkt! Die Leistung ist hervorragend und das Design ist einfach elegant. Würde es jederzeit wieder kaufen."
                    },
                    {
                      name: "Julia Becker",
                      date: "28.02.2024",
                      rating: 4,
                      comment: "Sehr zufrieden mit meinem Kauf. Die Kameraqualität ist erstklassig. Ein Stern Abzug wegen der Akkulaufzeit, die bei intensiver Nutzung etwas enttäuschend ist."
                    },
                    {
                      name: "Thomas Müller",
                      date: "10.02.2024",
                      rating: 5,
                      comment: "Fantastisches Produkt! Die Integration mit meinen anderen Apple-Geräten ist nahtlos. Die Verarbeitungsqualität ist wie immer bei Apple auf höchstem Niveau."
                    }
                  ].map((review, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex justify-between">
                          <CardTitle>{review.name}</CardTitle>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star} 
                              className={`h-4 w-4 ${star <= review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
                            />
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="flex justify-center mt-8">
                  <Button variant="outline">Alle Bewertungen anzeigen</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Related Products */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6">Ähnliche Produkte</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.iphones.slice(0, 4).map((product, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-square bg-muted flex items-center justify-center p-6">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="max-h-[150px] object-contain"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold truncate">{product.name}</h4>
                    <p className="text-sm text-muted-foreground truncate mb-2">{product.description}</p>
                    <p className="font-medium">
                      {typeof product.price === 'number' 
                        ? `${product.price} €` 
                        : product.price}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      localStorage.setItem("selectedProduct", JSON.stringify(product));
                      setActiveProduct(product);
                      window.scrollTo(0, 0);
                    }}
                  >
                    Details ansehen
                  </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
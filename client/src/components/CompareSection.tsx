import { useState } from "react";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, X } from "lucide-react";

interface ComparisonFeature {
  name: string;
  iphone15pro: boolean | string;
  iphone15: boolean | string;
  iphoneSE: boolean | string;
}

const phoneFeatures: ComparisonFeature[] = [
  {
    name: "Titan Gehäuse",
    iphone15pro: true,
    iphone15: false,
    iphoneSE: false
  },
  {
    name: "Dynamic Island",
    iphone15pro: true,
    iphone15: true,
    iphoneSE: false
  },
  {
    name: "A17 Pro Chip",
    iphone15pro: true,
    iphone15: false,
    iphoneSE: false
  },
  {
    name: "A16 Bionic",
    iphone15pro: false,
    iphone15: true,
    iphoneSE: false
  },
  {
    name: "A15 Bionic",
    iphone15pro: false,
    iphone15: false,
    iphoneSE: true
  },
  {
    name: "ProMotion Display",
    iphone15pro: true,
    iphone15: false,
    iphoneSE: false
  },
  {
    name: "USB-C Anschluss",
    iphone15pro: true,
    iphone15: true,
    iphoneSE: false
  },
  {
    name: "Kamera-Auflösung",
    iphone15pro: "48 MP",
    iphone15: "48 MP",
    iphoneSE: "12 MP"
  }
];

const macFeatures: ComparisonFeature[] = [
  {
    name: "M2 Pro Chip",
    iphone15pro: true,
    iphone15: false,
    iphoneSE: false
  },
  {
    name: "M2 Chip",
    iphone15pro: false,
    iphone15: true,
    iphoneSE: false
  },
  {
    name: "Liquid Retina XDR",
    iphone15pro: true,
    iphone15: false,
    iphoneSE: false
  },
  {
    name: "ProMotion Display",
    iphone15pro: true,
    iphone15: false,
    iphoneSE: false
  },
  {
    name: "Thunderbolt 4",
    iphone15pro: true,
    iphone15: true,
    iphoneSE: false
  },
  {
    name: "MagSafe",
    iphone15pro: true,
    iphone15: true,
    iphoneSE: false
  },
  {
    name: "Speicher max.",
    iphone15pro: "8 TB",
    iphone15: "2 TB",
    iphoneSE: "512 GB"
  }
];

type ProductCategory = "iphones" | "macbooks" | "ipads" | "airpods";

const CompareSection = () => {
  const [category, setCategory] = useState<ProductCategory>("iphones");
  const [features, setFeatures] = useState<ComparisonFeature[]>(phoneFeatures);
  
  const handleCategoryChange = (value: string) => {
    const newCategory = value as ProductCategory;
    setCategory(newCategory);
    
    // Set appropriate feature comparison based on category
    if (newCategory === "iphones") {
      setFeatures(phoneFeatures);
    } else if (newCategory === "macbooks") {
      setFeatures(macFeatures);
    } else {
      // Default to phone features for now
      setFeatures(phoneFeatures);
    }
  };

  // Get products for the current category
  const categoryProducts = products[category].slice(0, 3);
  
  return (
    <section id="compare" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Produktvergleich</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Vergleichen Sie die Features verschiedener Apple-Produkte und finden Sie das perfekte Gerät für Ihre Bedürfnisse.
        </p>
        
        <div className="flex justify-center mb-10">
          <Select onValueChange={handleCategoryChange} defaultValue="iphones">
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Produktkategorie wählen" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="iphones">iPhones</SelectItem>
                <SelectItem value="macbooks">MacBooks</SelectItem>
                <SelectItem value="ipads">iPads</SelectItem>
                <SelectItem value="airpods">AirPods</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-4 text-left font-medium">Feature</th>
                    {categoryProducts.map((product, index) => (
                      <th key={index} className="p-4 text-center font-medium">
                        {product.name}
                        <div className="text-sm font-normal text-muted-foreground mt-1">
                          {typeof product.price === 'number' ? `${product.price} €` : product.price}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-muted/30" : ""}>
                      <td className="p-4 border-t">{feature.name}</td>
                      {category === "iphones" && (
                        <>
                          <td className="p-4 border-t text-center">
                            {typeof feature.iphone15pro === "boolean" ? (
                              feature.iphone15pro ? 
                                <Check className="mx-auto text-green-500" /> : 
                                <X className="mx-auto text-red-500" />
                            ) : (
                              feature.iphone15pro
                            )}
                          </td>
                          <td className="p-4 border-t text-center">
                            {typeof feature.iphone15 === "boolean" ? (
                              feature.iphone15 ? 
                                <Check className="mx-auto text-green-500" /> : 
                                <X className="mx-auto text-red-500" />
                            ) : (
                              feature.iphone15
                            )}
                          </td>
                          <td className="p-4 border-t text-center">
                            {typeof feature.iphoneSE === "boolean" ? (
                              feature.iphoneSE ? 
                                <Check className="mx-auto text-green-500" /> : 
                                <X className="mx-auto text-red-500" />
                            ) : (
                              feature.iphoneSE
                            )}
                          </td>
                        </>
                      )}
                      {category === "macbooks" && (
                        <>
                          <td className="p-4 border-t text-center">
                            {typeof feature.iphone15pro === "boolean" ? (
                              feature.iphone15pro ? 
                                <Check className="mx-auto text-green-500" /> : 
                                <X className="mx-auto text-red-500" />
                            ) : (
                              feature.iphone15pro
                            )}
                          </td>
                          <td className="p-4 border-t text-center">
                            {typeof feature.iphone15 === "boolean" ? (
                              feature.iphone15 ? 
                                <Check className="mx-auto text-green-500" /> : 
                                <X className="mx-auto text-red-500" />
                            ) : (
                              feature.iphone15
                            )}
                          </td>
                        </>
                      )}
                      {(category === "ipads" || category === "airpods") && (
                        <>
                          <td className="p-4 border-t text-center" colSpan={3}>
                            Vergleichsdaten werden geladen...
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CompareSection;
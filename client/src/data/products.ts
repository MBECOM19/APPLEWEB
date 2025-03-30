export interface Product {
  name: string;
  description: string;
  price: number | string;
  img: string;
  fullImg: string;
}

interface ProductCategories {
  iphones: Product[];
  macbooks: Product[];
  airpods: Product[];
  ipads: Product[];
}

export const products: ProductCategories = {
  iphones: [
    {
      name: "iPhone 15 Pro",
      description: "Titanium. So strong. So light. So Pro.",
      price: 1199,
      img: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      fullImg: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      name: "iPhone 15",
      description: "Eine magische neue Art, mit deinem iPhone zu interagieren.",
      price: 949,
      img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      fullImg: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      name: "iPhone SE",
      description: "Leistung und Wert in perfekter Balance.",
      price: 529,
      img: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      fullImg: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    }
  ],
  macbooks: [
    {
      name: "MacBook Pro",
      description: "Mit dem leistungsstarken M2 Pro oder M2 Max Chip.",
      price: 1999,
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      fullImg: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      name: "MacBook Air",
      description: "Dünn, leicht und leistungsstark mit M2 Chip.",
      price: 1199,
      img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      fullImg: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    }
  ],
  airpods: [
    {
      name: "AirPods Pro",
      description: "Aktives Noise Cancelling für immersiven Sound.",
      price: 279,
      img: "https://images.unsplash.com/photo-1606741965429-8cc24f9a0550?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      fullImg: "https://images.unsplash.com/photo-1606741965429-8cc24f9a0550?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      name: "AirPods (3. Generation)",
      description: "Räumliches Audio mit dynamischem Head Tracking.",
      price: 199,
      img: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      fullImg: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    }
  ],
  ipads: [
    {
      name: "iPad Pro",
      description: "Der ultimative iPad-Erlebnis mit M2 Chip.",
      price: 1049,
      img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      fullImg: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      name: "iPad Air",
      description: "Leistungsstark. Farbenfroh. Wunderschön.",
      price: 679,
      img: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      fullImg: "https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      name: "iPad",
      description: "Liebenswert. Zeichenfreudig. Unverzichtbar.",
      price: 429,
      img: "https://images.unsplash.com/photo-1589739900243-4b52cd9b16ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      fullImg: "https://images.unsplash.com/photo-1589739900243-4b52cd9b16ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    }
  ]
};

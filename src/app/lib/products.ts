import pic1 from "../assets/newarrivals/pic1.png";
import pic2 from "../assets/newarrivals/pic2.png";
import pic3 from "../assets/newarrivals/pic3.png";
import y1 from "../assets/youngsfavorite/pic1.png";
import y2 from "../assets/youngsfavorite/pic2.png";
import { StaticImageData } from "next/image";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: StaticImageData;
};

export const products: Product[] = [
  {
    id: "lumen-hoodie-core",
    name: "Core Logo Hoodie",
    category: "Hoodies",
    price: 68,
    description:
      "Heavyweight cotton fleece hoodie with a soft brushed interior. Unisex fit for everyday layering.",
    image: pic1,
  },
  {
    id: "lumen-parkas-city",
    name: "City Parka",
    category: "Outerwear",
    price: 128,
    description:
      "Water-resistant shell with a clean silhouette. Built for cool evenings and urban commute.",
    image: pic2,
  },
  {
    id: "lumen-tee-essentials",
    name: "Essentials Tee",
    category: "T-Shirts",
    price: 32,
    description:
      "Midweight jersey tee with a relaxed unisex cut. Pre-washed for a soft hand feel.",
    image: pic3,
  },
  {
    id: "lumen-street-set",
    name: "Street Weekend Set",
    category: "Sets",
    price: 96,
    description:
      "Coordinated casual pieces styled for weekends. Mix and match across the Lumen collection.",
    image: y1,
  },
  {
    id: "lumen-daily-knit",
    name: "Daily Knit Pullover",
    category: "Knitwear",
    price: 54,
    description:
      "Breathable knit pullover for cooler days. Soft yarn, clean neckline, easy care.",
    image: y2,
  },
  {
    id: "lumen-oversized-tee",
    name: "Oversized Studio Tee",
    category: "T-Shirts",
    price: 38,
    description:
      "Dropped shoulder oversized tee with subtle branding. Designed to layer or wear alone.",
    image: pic3,
  },
];

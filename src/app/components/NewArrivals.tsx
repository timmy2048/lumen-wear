import React from "react";
import Image from "next/image";
import Link from "next/link";
import pic1 from "../assets/newarrivals/pic1.png";
import pic2 from "../assets/newarrivals/pic2.png";
import pic3 from "../assets/newarrivals/pic3.png";
import { BsArrowRight } from "react-icons/bs";

const items = [
  { src: pic1, title: "Hoodies & Sweatshirts", href: "/shop" },
  { src: pic2, title: "Coats & Parkas", href: "/shop" },
  { src: pic3, title: "Tees & T-Shirts", href: "/shop" },
];

const NewArrivals = () => {
  return (
    <div>
      <h3 className="text-2xl lg:text-3xl font-extrabold uppercase mb-12 lg:mb-20">
        New Arrivals
      </h3>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="p-2 rounded-md hover:scale-95 transition-transform mb-6 lg:mb-0 block"
          >
            <Image width={320} height={400} src={item.src} alt={item.title} />
            <div className="flex justify-between items-center mt-4">
              <div className="ml-1">
                <h5 className="text-lg lg:text-xl font-semibold">{item.title}</h5>
                <span className="text-neutral-600">Explore Now!</span>
              </div>
              <div className="mr-1">
                <BsArrowRight />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;

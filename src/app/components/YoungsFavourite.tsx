import React from "react";
import Image from "next/image";
import Link from "next/link";
import pic1 from "../assets/youngsfavorite/pic1.png";
import pic2 from "../assets/youngsfavorite/pic2.png";
import { BsArrowRight } from "react-icons/bs";

const YoungsFavourite = () => {
  return (
    <div className="p-4">
      <h3 className="text-2xl lg:text-3xl font-extrabold mb-12 lg:mb-20">
        Community Favourites
      </h3>
      <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8 items-center">
        <Link href="/shop" className="p-2 rounded-md hover:scale-105 transition-transform mb-8 lg:mb-0 block">
          <Image
            className="w-[320px] h-[380px] lg:w-[660px] lg:h-[auto]"
            src={pic1}
            alt="Trending street looks"
          />
          <div className="flex justify-between items-center mt-4">
            <div className="ml-1">
              <h5 className="text-lg lg:text-xl font-semibold">
                Trending Street Looks
              </h5>
              <span className="text-neutral-600">Explore Now!</span>
            </div>
            <BsArrowRight />
          </div>
        </Link>
        <Link href="/shop" className="p-2 rounded-md hover:scale-105 transition-transform block">
          <Image
            className="w-[320px] h-[380px] lg:w-[660px] lg:h-[auto]"
            src={pic2}
            alt="Essentials under 40"
          />
          <div className="flex justify-between items-center mt-4">
            <div className="ml-1">
              <h5 className="text-lg lg:text-xl font-semibold">Essentials Under $40</h5>
              <span className="text-neutral-600">Explore Now!</span>
            </div>
            <BsArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default YoungsFavourite;

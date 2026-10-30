import React from "react";

const tags = [
  "Streetwear",
  "Unisex",
  "Everyday",
  "Layering",
  "Essentials",
  "Limited Drops",
];

const Brands = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-around items-center bg-yellow-300 py-6 px-4 lg:px-8 gap-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="m-2 text-sm lg:text-base font-extrabold uppercase tracking-widest text-black"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Brands;

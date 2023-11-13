import React from "react";

export default function ProductCard() {
  return (
    <div className="w-full p-4 lg:w-1/4 md:w-1/2">
      <a className="relative block h-48 overflow-hidden rounded">
        <img
          alt="ecommerce"
          className="block object-cover object-center w-full h-full"
          src="https://dummyimage.com/420x260"
        />
      </a>
      <div className="mt-4">
        <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
          CATEGORY
        </h3>
        <h2 className="text-lg font-medium text-gray-900 title-font">
          The Catalyzer
        </h2>
        <p className="mt-1">$16.00</p>
      </div>
    </div>
  );
}

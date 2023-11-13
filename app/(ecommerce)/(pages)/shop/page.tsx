import React from "react";
import ProductCard from "@/components/shared/ProductCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function store() {
  return (
    <main>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-lg font-medium">
            <h1>Best sellers</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col items-start mx-auto lg:w-2/3 sm:flex-row sm:items-center">
            <h2 className="flex-grow text-2xl font-medium text-gray-900 sm:pr-16 title-font">
              Slow-carb next level shoindxgoitch ethical authentic, scenester
              sriracha forage.
            </h2>
            <Link href="/shop">
              <Button>Shop Now</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

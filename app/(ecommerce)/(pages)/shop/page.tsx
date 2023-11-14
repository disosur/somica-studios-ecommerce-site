import React from "react";
import ProductCard from "@/components/shared/ProductCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db/prisma";

export default async function store() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <main>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-lg font-medium">
            <h1>Our Products</h1>
          </div>
          <div className="flex flex-wrap justify-center gap-4 m-4">
            {products.slice(0).map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
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

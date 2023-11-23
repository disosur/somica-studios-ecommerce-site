import React from "react";
import ProductCard from "@/components/shared/ProductCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db/prisma";
import CTA from "@/components/Coded sections/CTA";

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
      <CTA />
    </main>
  );
}

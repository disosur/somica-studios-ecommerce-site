import React from "react";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db/prisma";
import CTA from "@/components/Coded sections/CTA";

export default async function store() {
  const products = await prisma.product.findMany({
    orderBy: { id: "asc" },
  });

  return (
    <main>
      <section>
        <div className="container flex flex-col items-center px-5 py-24 mx-auto">
          <div className="flex justify-center">
            <h1>Our Products</h1>
          </div>
          <div className="flex gap-4 px-4 border-2">
            <Button variant="link">All</Button>
            <Button variant="link">Plants</Button>
            <Button variant="link">Desk organizers</Button>
            <Button variant="link">Controllers</Button>
            <Button variant="link">Consoles</Button>
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

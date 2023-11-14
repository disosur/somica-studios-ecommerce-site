import React from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/shared/ProductCard";
import Link from "next/link";
import { prisma } from "@/lib/db/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import PriceTag from "@/components/ui/priceTag";
import { Separator } from "@/components/ui/separator";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <main>
      <section className="overflow-hidden text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap mx-auto lg:w-4/5">
            <Image
              alt={product.name}
              className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto"
              src={product.imageURL[0]}
              height={400}
              width={400}
            />
            <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
              <h2 className="text-sm tracking-widest text-gray-500 title-font">
                {product.category}
              </h2>
              <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                {product.name}
              </h1>

              <p className="leading-relaxed">{product.description}</p>
              <Separator />
              <div className="flex justify-between">
                <PriceTag price={product.price} />
                <Button>Add to cart</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-lg font-medium">
            <h2>You might also like</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {products
              .filter((product) => product.category)
              .slice(0, 3)
              .map((product) => (
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

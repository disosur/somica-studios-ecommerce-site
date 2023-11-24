import React, { cache } from "react";
import ProductCard from "@/components/shared/ProductCard";
import { prisma } from "@/lib/db/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import PriceTag from "@/components/ui/priceTag";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import CTA from "@/components/Coded sections/CTA";
import { incrementProductQuantity } from "./actions";
import AddToCartButton from "@/components/shared/AddToCartButton";

type ProductPageProps = {
  params: {
    id: string;
  };
};

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [{ url: product.imageURL[0] }],
    },
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <main>
      <section className="overflow-hidden body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap mx-auto lg:w-4/5">
            <Image
              alt={product.name}
              className="object-cover object-center w-full h-64 border-2 rounded lg:w-1/2 lg:h-auto"
              src={product.imageURL[0]}
              height={400}
              width={400}
            />
            <div className="flex flex-col justify-between w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
              <div className="gap-4">
                <h2 className="text-sm tracking-widesttitle-font">
                  {product.category}
                </h2>
                <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                  {product.name}
                </h1>
                <p className="leading-relaxed">{product.description}</p>
              </div>
              <div>
                <Separator />
                <div className="flex justify-between">
                  <PriceTag price={product.price} />
                  <AddToCartButton
                    productId={product.id}
                    incrementProductQuantity={incrementProductQuantity}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container px-5 py-24 mx-auto">
          <div>
            <h2>You might also like...</h2>
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

      <CTA />
    </main>
  );
}

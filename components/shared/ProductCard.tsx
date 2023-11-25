import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@prisma/client";
import PriceTag from "../ui/priceTag";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={"/product/" + product.id}>
      <Card className=" w-[25rem]  h-[35rem] bg-card border-2 shadow-md">
        <CardHeader className="gap-2">
          <Image
            className="border-2 "
            src={product.imageURL[0]}
            alt={product.name}
            width={350}
            height={350}
          />
          <CardTitle className="break-word">{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="text-lg font-bold">
          <h4>{product.category}</h4>
          <PriceTag price={product.price} />
        </CardContent>
      </Card>
    </Link>
  );
}

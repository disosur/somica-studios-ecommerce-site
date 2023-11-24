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
      <Card className=" w-[25rem]  h-[37rem] bg-background border-2">
        <CardHeader className="gap-2">
          <Image
            className="border-2 rounded-2xl"
            src={product.imageURL[0]}
            alt={product.name}
            width={350}
            height={350}
          />
          <CardTitle className="break-word">{product.name}</CardTitle>
          <h4>{product.category}</h4>
        </CardHeader>
        <CardContent className="text-lg font-bold">
          <PriceTag price={product.price} />
        </CardContent>
      </Card>
    </Link>
  );
}

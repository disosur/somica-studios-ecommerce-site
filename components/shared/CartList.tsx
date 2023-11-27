"use client";

import { CartItemWithProduct } from "@/lib/db/cart";
import { currencyFormat } from "@/lib/currency";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";

type CartListProps = {
  cartItem: CartItemWithProduct;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
};

export default function CartList({
  cartItem: { product, quantity },
  setProductQuantity,
}: CartListProps) {
  const [isPending, startTransition] = useTransition();

  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i <= 99; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="flex justify-between">
      <div className="flex flex-row items-center gap-3">
        <Image
          src={product.imageURL[0]}
          alt={product.name}
          width={50}
          height={50}
          className="rounded-lg"
        />
        <div>
          <Link
            href={"/product/" + product.id}
            className="font-bold break-words">
            {product.name}
          </Link>
          <div>Price: {currencyFormat(product.price)}</div>
        </div>
      </div>
      <div className="divider" />
      <div className="flex items-center gap-2 my-1">
        Quantity:
        <select
          className="select-bordered border-2 select w-full max-w-[80px]"
          defaultValue={quantity}
          onChange={(e) => {
            const newQuantity = parseInt(e.currentTarget.value);
            startTransition(async () => {
              await setProductQuantity(product.id, newQuantity);
            });
          }}>
          <option value={0}>0 (Remove)</option>
          {quantityOptions}
        </select>
      </div>
    </div>
  );
}

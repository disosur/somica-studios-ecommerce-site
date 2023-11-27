import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { HiOutlineShoppingCart } from "react-icons/hi2";
import CartList from "./CartList";
import { currencyFormat } from "@/lib/currency";
import { getCart } from "@/lib/db/cart";
import { ProductQuantity } from "@/app/actions/ProductQuantity";

export default async function CartView() {
  const cart = await getCart();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="px-3 py-2 border-b-2 rounded-lg">
          <HiOutlineShoppingCart />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-4 overflow-x-hidden border-2 bg-background w-96 max-h-[40rem]">
          <DropdownMenuLabel>Cart Items</DropdownMenuLabel>
          <div>
            {cart?.items.map((cartItem) => (
              <CartList
                cartItem={cartItem}
                key={cartItem.id}
                setProductQuantity={ProductQuantity}
              />
            ))}
            {!cart?.items.length && <p>Your cart is empty.</p>}
          </div>
          <div className="flex flex-col items-end sm:items-center">
            <p className="mb-3 font-bold">
              Total: {currencyFormat(cart?.subtotal || 0)}
            </p>

            <Button>Check out</Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

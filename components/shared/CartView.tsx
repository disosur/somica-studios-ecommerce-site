import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import CartList from "./CartList";
import { currencyFormat } from "@/lib/currency";
import { getCart } from "@/lib/db/cart";
import { LoginProps } from "@/app/types/LogInProps";

export default async function CartView({ session }: LoginProps) {
  const cart = await getCart();
  const user = session?.user;

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="px-3 py-2 border rounded-xl">
            <HiOutlineShoppingCart />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-4 overflow-x-hidden overflow-y-scroll w-96 h-96">
            <DropdownMenuLabel>Cart Items</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div>
              {cart?.items.map((cartItem) => (
                <CartList cartItem={cartItem} key={cartItem.id} />
              ))}
              {!cart?.items.length && <p>Your cart is empty.</p>}
              <div className="flex flex-col items-end sm:items-center">
                <p className="mb-3 font-bold">
                  Total: {currencyFormat(cart?.subtotal || 0)}
                </p>
                <Button className="btn-primary btn sm:w-[200px]">
                  Checkout
                </Button>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : null}
    </>
  );
}

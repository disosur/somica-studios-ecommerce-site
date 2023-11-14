import React from "react";
import { currencyFormat } from "@/lib/currency";

type PriceTagProps = {
  price: number;
  className?: string;
};

export default function PriceTag({ price, className }: PriceTagProps) {
  return <span>{currencyFormat(price)}</span>;
}

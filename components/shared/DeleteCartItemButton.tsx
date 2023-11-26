"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";

type AddToCartButtonProps = {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
};

export default function DeleteCartItemButton({
  productId,
  incrementProductQuantity,
}: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={() => {
          startTransition(async () => {
            await incrementProductQuantity(productId);
          });
        }}>
        Add to Cart
      </Button>
      {isPending && <span className="loading loading-spinner loading-md" />}
      {!isPending && success && (
        <span className="text-success">Added to Cart.</span>
      )}
    </div>
  );
}

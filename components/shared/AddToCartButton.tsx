"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type AddToCartButtonProps = {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
};

export default function AddToCartButton({
  productId,
  incrementProductQuantity,
}: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <>
        {isPending ? (
          <Button disabled className="flex justify-center">
            <Loader2 className="w-4 h-4 mx-6 animate-spin" />
          </Button>
        ) : success ? (
          <Button disabled>Added to cart</Button>
        ) : (
          <Button
            onClick={() => {
              setSuccess(false);
              startTransition(async () => {
                await incrementProductQuantity(productId);
                setSuccess(true);
                setSuccess(false);
              });
            }}>
            Add to Cart
          </Button>
        )}
      </>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CTA() {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-row items-start justify-between mx-auto sm:flex-row sm:items-center">
          <h3 className="font-medium ">
            Start shopping now our creations now!!
          </h3>
          <Link href="/shop">
            <Button>Shop Now</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

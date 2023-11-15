import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CTA() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-start mx-auto lg:w-2/3 sm:flex-row sm:items-center">
          <h2 className="flex-grow text-2xl font-medium text-gray-900 sm:pr-16 title-font">
            Slow-carb next level shoindxgoitch ethical authentic, scenester
            sriracha forage.
          </h2>
          <Link href="/shop">
            <Button>Shop Now</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

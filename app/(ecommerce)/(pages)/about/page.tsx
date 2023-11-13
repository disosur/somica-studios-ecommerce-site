import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AboutCard from "@/components/shared/AboutCard";

export default function About() {
  return (
    <main>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>

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
    </main>
  );
}

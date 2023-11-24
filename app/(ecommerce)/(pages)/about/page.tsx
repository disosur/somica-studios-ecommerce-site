import React from "react";
import CTA from "@/components/Coded sections/CTA";
import Image2 from "@/public/image-2.jpg";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <section>
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h2>Welcome to Somica Studios</h2>
            <p>
              At Somica Studios, we believe in the magic of creation. Our
              journey began with a passion for bringing imagination to life
              through 3D printing. What started as a dream has now evolved into
              a haven for unique, whimsical, and enchanting 3D printed models.
            </p>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <Image
              alt="Somica Studios"
              className="object-cover object-center w-full border-2"
              src={Image2}
              height={600}
              width={720}
            />
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

import CTA from "@/components/Coded sections/CTA";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db/prisma";
import Link from "next/link";
import Image1 from "@/public/image-1.jpg";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Somica Studios",
  description:
    "Immerse yourself to a custom created and cute 3D printed creations that would elebate your life",
};

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <main>
      {/*Hero Section*/}
      <section>
        <div className="container flex flex-col items-center justify-center h-screen px-5 py-24 mx-auto">
          <div className="w-full text-center lg:w-2/3">
            <h1>Somica Studios</h1>
            <h4 className="mb-8">
              Discover a world of cuteness as we bring your imagination to life
              through our high-quality 3D printed products. From whimsical
              organizers to playful gaming peripherals, we've curated a range
              that combines practicality with charm.
            </h4>
            <div className="flex justify-center gap-4">
              <Link href="/shop">
                <Button>Shop Now</Button>
              </Link>
              <Link href="/about">
                <Button className=" border-border" variant="outline">
                  Who we are
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*Best Seller Section*/}
      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex justify-center">
            <h2>Best sellers</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {products
              .filter((product) => product.bestSeller)
              .slice(0, 3)
              .map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div>
        </div>
      </section>

      {/*About Section*/}
      <section>
        <div className="container flex flex-wrap px-5 py-24 mx-auto">
          <div className="w-full mb-10 overflow-hidden rounded-lg lg:w-1/2 lg:mb-0">
            <Image
              alt="Magical Forest"
              className="object-cover object-center w-full h-full border-2"
              src={Image1}
              height={500}
              width={460}
            />
          </div>
          <div className="flex flex-col flex-wrap -mb-10 text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
            <div className="flex flex-col items-center mb-10 lg:items-start">
              <div className="flex-grow">
                <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                  Enchanting Forest Creatures
                </h2>
                <p className="text-base leading-relaxed">
                  Step into a world of wonder with our Enchanting Forest
                  Creatures collection. These adorable 3D printed models bring
                  the magic of mystical forests to life. Perfect for nature
                  lovers and fantasy enthusiasts, these creatures will add a
                  touch of enchantment to any space.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center mb-10 lg:items-start">
              <div className="flex-grow">
                <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                  Futuristic Tech Marvels
                </h2>
                <p className="text-base leading-relaxed">
                  Explore the future with our Futuristic Tech Marvels
                  collection. These cutting-edge 3D printed models showcase the
                  perfect blend of art and technology. Whether you're a tech
                  enthusiast or a collector of modern marvels, these pieces are
                  sure to spark excitement and curiosity.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center mb-10 lg:items-start">
              <div className="flex-grow">
                <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                  Whimsical Wonderland
                </h2>
                <p className="text-base leading-relaxed">
                  Immerse yourself in a Whimsical Wonderland with our charming
                  collection. These 3D printed models capture the essence of
                  fantasy and joy. Whether you're young or young at heart, these
                  whimsical wonders will bring a smile to your face and a touch
                  of magic to your space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*CTA Section*/}
      <CTA />
    </main>
  );
}

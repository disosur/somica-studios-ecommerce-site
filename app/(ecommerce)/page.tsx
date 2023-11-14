import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db/prisma";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <main>
      {/*Hero Section*/}
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center justify-center h-screen px-5 py-24 mx-auto">
          <div className="w-full text-center lg:w-2/3">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
              Microdosing synth tattooed vexillologist
            </h1>
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/shop">
                <Button>Shop Now</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline">Who we are</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*Featured Section*/}
      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto">
          <div className="mx-auto lg:w-2/3">
            <div className="relative flex flex-wrap w-full px-10 py-32 mb-4 bg-gray-100">
              <img
                alt="gallery"
                className="absolute inset-0 block object-cover object-center w-full h-full opacity-25"
                src="https://dummyimage.com/820x340"
              />
              <div className="relative z-10 w-full text-center">
                <h2 className="mb-2 text-2xl font-medium text-gray-900 title-font">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed">
                  Skateboard +1 mustache fixie paleo lumbersexual.
                </p>
                <a className="inline-flex items-center mt-3 text-indigo-500">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2">
                <div className="relative flex flex-wrap w-full px-6 py-16 bg-gray-100 sm:py-24 sm:px-10">
                  <img
                    alt="gallery"
                    className="absolute inset-0 block object-cover object-center w-full h-full opacity-25"
                    src="https://dummyimage.com/542x460"
                  />
                  <div className="relative z-10 w-full text-center">
                    <h2 className="mb-2 text-xl font-medium text-gray-900 title-font">
                      Shooting Stars
                    </h2>
                    <p className="leading-relaxed">
                      Skateboard +1 mustache fixie paleo lumbersexual.
                    </p>
                    <a className="inline-flex items-center mt-3 text-indigo-500">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-1/2 px-2">
                <div className="relative flex flex-wrap w-full px-6 py-16 bg-gray-100 sm:py-24 sm:px-10">
                  <img
                    alt="gallery"
                    className="absolute inset-0 block object-cover object-center w-full h-full opacity-25"
                    src="https://dummyimage.com/542x420"
                  />
                  <div className="relative z-10 w-full text-center">
                    <h2 className="mb-2 text-xl font-medium text-gray-900 title-font">
                      Shooting Stars
                    </h2>
                    <p className="leading-relaxed">
                      Skateboard +1 mustache fixie paleo lumbersexual.
                    </p>
                    <a className="inline-flex items-center mt-3 text-indigo-500">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Best Seller Section*/}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-lg font-medium">
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
      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto">
          <div className="w-full mb-10 overflow-hidden rounded-lg lg:w-1/2 lg:mb-0">
            <img
              alt="feature"
              className="object-cover object-center w-full h-full"
              src="https://dummyimage.com/460x500"
            />
          </div>
          <div className="flex flex-col flex-wrap -mb-10 text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
            <div className="flex flex-col items-center mb-10 lg:items-start">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-5 text-indigo-500 bg-indigo-100 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                  Shooting Stars
                </h2>
                <p className="text-base leading-relaxed">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className="inline-flex items-center mt-3 text-indigo-500">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center mb-10 lg:items-start">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-5 text-indigo-500 bg-indigo-100 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24">
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                  The Catalyzer
                </h2>
                <p className="text-base leading-relaxed">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className="inline-flex items-center mt-3 text-indigo-500">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center mb-10 lg:items-start">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-5 text-indigo-500 bg-indigo-100 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="mb-3 text-lg font-medium text-gray-900 title-font">
                  Neptune
                </h2>
                <p className="text-base leading-relaxed">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className="inline-flex items-center mt-3 text-indigo-500">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*CTA Section*/}
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

import LinkCard from "@/components/shared/LinkCard";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/*Hero section*/}
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col items-center justify-center h-[56rem] px-5 mx-auto">
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
            <div className="flex justify-center">
              <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                Button
              </button>
              <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*offerings section*/}
      <section className="">
        <div className="container grid items-center justify-center grid-flow-col grid-cols-2 grid-rows-2 gap-4 px-5 mx-auto">
          <LinkCard />
          <LinkCard />
          <LinkCard />
          <LinkCard />
        </div>
      </section>

      <section>
        <LinkCard />
      </section>

      {/*Best Sellers section*/}
      <section></section>

      {/*Our Story section*/}
      <section></section>

      {/*Featured section*/}
      <section></section>

      {/*offering and newsletter section*/}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep.
            </p>
          </div>
          <div className="flex flex-col items-end w-full px-8 mx-auto space-y-4 lg:w-2/3 sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <button className="px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
              Button
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

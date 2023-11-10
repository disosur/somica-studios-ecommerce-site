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
      <section>
        <div className="container flex flex-col items-center justify-center px-5 mx-auto">
          <LinkCard />
        </div>
      </section>
    </main>
  );
}

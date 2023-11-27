"use client";

import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

export default function Carousel({ slides }: { slides: string[] }) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative overflow-hidden w-[500px] h-[440px] border-2">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides.map((img) => (
          <img src={img} alt="" />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 text-gray-800 rounded-full shadow hover:bg-white">
          <HiChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 text-gray-800 rounded-full shadow hover:bg-white">
          <HiChevronRight size={40} />
        </button>
      </div>

      <div className="absolute left-0 right-0 bottom-4">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

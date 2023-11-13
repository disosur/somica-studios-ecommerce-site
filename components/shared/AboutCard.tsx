import React from "react";

export default function AboutCard() {
  return (
    <div>
      <div className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-4 text-indigo-500 bg-indigo-100 rounded-full">
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
      <div className="flex-grow pl-6">
        <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
          Shooting Stars
        </h2>
        <p className="text-base leading-relaxed">
          Blue bottle crucifix vinyl post-ironic four dollar toast vegan
          taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
          pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.
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
  );
}

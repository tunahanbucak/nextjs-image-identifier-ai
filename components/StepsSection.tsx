import Image from "next/image";
import React from "react";

const steps = [
  {
    imgSrc: "/learn.jpg",
    title: "Step 1: Learn",
    description:
      "Discover how our AI technology processes images for analysis.",
  },
  {
    imgSrc: "/upload.webp",
    title: "Step 2: Upload",
    description: "Easily upload your image in just a few clicks.",
  },
  {
    imgSrc: "/analysis.webp",
    title: "Step 3: Analyze",
    description:
      "Receive instant analysis and detailed insights about your image.",
  },
];

export function StepsSection() {
  return (
    <section id="steps" className="py-16">
      <div className="absolute inset-0 " />
      <div className="flex items-center justify-center h-full relative z-20 text-center text-gray-600 px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Unlock the Power of AI
          </h1>
          <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Transform your images with cutting-edge AI analysis.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-500 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 cursor-pointer">
              <Image
                src={step.imgSrc}
                alt={step.title}
                width={120}
                height={120}
                className="mb-4 mx-auto w-40 h-40 rounded-lg"
              />
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {step.title}
              </h3>
              <p className="text-white">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

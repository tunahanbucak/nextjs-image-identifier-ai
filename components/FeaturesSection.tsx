import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Fast Processing",
    description:
      "Our AI provides results in seconds, saving you time and effort.",
    icon: "https://cdn-icons-png.flaticon.com/512/10612/10612959.png",
  },
  {
    title: "User-Friendly Interface",
    description: "Designed for simplicity, making it easy for anyone to use.",
    icon: "https://cdn-icons-png.flaticon.com/512/4946/4946395.png",
  },
  {
    title: "Reliable Insights",
    description: "Get accurate and detailed analysis for your images.",
    icon: "/reliability.png",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-300 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 cursor-pointer">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={80}
                height={80}
                className="mb-4 mx-auto w-40 h-40"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

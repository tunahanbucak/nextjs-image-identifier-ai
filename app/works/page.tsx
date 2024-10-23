import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-200">
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-5xl font-extrabold mb-4">
              Unlock the Power of AI
            </h1>
            <p className="text-xl mb-8">
              Transform your images with cutting-edge AI analysis.
            </p>
            <a
              href="#steps"
              className="bg-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-blue-500 transition duration-200">
              Get Started
            </a>
          </div>
        </div>
      </section>
      <section id="steps" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                imgSrc: "/learn.svg",
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
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:shadow-xl">
                <Image
                  src={step.imgSrc}
                  alt={step.title}
                  width={120}
                  height={120}
                  className="mb-4 mx-auto"
                />
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Processing",
                description:
                  "Our AI provides results in seconds, saving you time and effort.",
                icon: "/fast.svg",
              },
              {
                title: "User-Friendly Interface",
                description:
                  "Designed for simplicity, making it easy for anyone to use.",
                icon: "/user-friendly.png",
              },
              {
                title: "Reliable Insights",
                description:
                  "Get accurate and detailed analysis for your images.",
                icon: "/reliable.svg",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="mb-4 mx-auto"
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
            User Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "This AI service made my analysis process so easy!",
                user: "User A",
              },
              {
                text: "The results were insightful and accurate!",
                user: "User B",
              },
              {
                text: "I love how quickly it processes my images.",
                user: "User C",
              },
              {
                text: "Fantastic tool for anyone needing image analysis.",
                user: "User D",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105">
                <p className="text-gray-600">"{testimonial.text}"</p>
                <p className="mt-2 font-semibold text-gray-800">
                  - {testimonial.user}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

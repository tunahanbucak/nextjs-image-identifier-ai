import React from "react";

export function HeroSection() {
  return (
    <section className="relative bg-cover bg-center h-screen">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <div className="flex items-center justify-center h-full relative z-20 text-center text-white px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Unlock the Power of AI
          </h1>
          <p className="text-xl mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Transform your images with cutting-edge AI analysis.
          </p>
        </div>
      </div>
    </section>
  );
}

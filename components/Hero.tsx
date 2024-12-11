import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative text-white py-36 bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Discover the Future of AI-Powered Image Recognition
          </h1>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Upload your images and let AI analyze them to provide in-depth
            information and recognition.
          </p>
          <Link href="#upload">
            <Button className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all rounded-full">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 flex justify-center items-center animate__animated animate__fadeIn animate__delay-1s">
            <div className="absolute inset-0 w-full h-full bg-black opacity-40 rounded-full"></div>
            <Image
              src="/ai-icon.png"
              alt="AI Icon"
              width={200}
              height={200}
              className="z-10 transform scale-110 opacity-80 hover:scale-125 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

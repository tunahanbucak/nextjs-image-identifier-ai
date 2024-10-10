import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative  text-black py-20 ">
      <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-extrabold mb-6">
            Discover Amazing Images
          </h1>
          <p className="text-lg mb-8">
            Upload your images and let AI identify and give you detailed
            information about them!
          </p>
          <Link href="#home">
            <Button className="bg-white text-blue-600 py-3 px-6 rounded-full hover:bg-gray-200">
              Get Started
            </Button>
          </Link>
        </div>
        <Image
          src="/ai.jpg"
          alt="AI Image"
          width={500}
          height={400}
          className="rounded-full"
        />
      </div>
    </section>
  );
}

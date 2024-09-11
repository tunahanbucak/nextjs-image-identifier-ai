import React from "react";

export default function page() {
  return (
    <main className="min-h-screen  bg-gray-300 ">
      <div className=" bg-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Upload Image", "AI Analysis", "Get Result"].map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition duration-150 ease-in-out transform hover:scale-105">
              <div className="text-3xl font-bold text-blue-600 mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {" "}
                {step}
              </h3>
              <p className="text-gray-600">
                Our advanced AI analyzes your uploaded image and provides
                detailed information about its contents.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

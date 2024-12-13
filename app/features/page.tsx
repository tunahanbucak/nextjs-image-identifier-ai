import React from "react";

export default function page() {
  return (
    <main className="min-h-screen bg-gray-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-100 rounded-lg  px-8 py-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Accurate Identification",
              "Detalied Information",
              "Fast Result",
              "User-Friendly Interface",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transition duration-150 ease-in-out transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
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
      </div>
    </main>
  );
}

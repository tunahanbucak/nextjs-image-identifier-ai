import React from "react";

export default function page() {
  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Contact Us
        </h2>
        <form className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 border border-gray-300 rounded-md"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-md mt-4"
            required></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg mt-4 hover:bg-blue-500 transition duration-200">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

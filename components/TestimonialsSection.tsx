import React from "react";

const testimonials = [
  { text: "This AI service made my analysis process so easy!", user: "User A" },
  { text: "The results were insightful and accurate!", user: "User B" },
  { text: "I love how quickly it processes my images.", user: "User C" },
  { text: "Fantastic tool for anyone needing image analysis.", user: "User D" },
];

export default function TestimonialsSection() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8">
          User Experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center transition-transform transform hover:scale-105 cursor-pointer">
              <p className="text-gray-600">{testimonial.text}</p>
              <p className="mt-2 font-semibold text-gray-800">
                - {testimonial.user}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import FeaturesSection from "@/components/FeaturesSection";
import StepsSection from "@/components/StepsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import React from "react";

export default function Page() {
  return (
    <div
      className="min-h-screen bg-gray-200 "
      style={{
        backgroundImage: "url('/ai-machine.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
      <StepsSection />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  );
}

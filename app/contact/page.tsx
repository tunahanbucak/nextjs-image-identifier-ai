import Form from "@/components/Form";
import React from "react";

export default function page() {
  return (
    <section
      className="min-h-screen bg-gray-300"
      style={{
        backgroundImage: "url('/ai-machine.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-400 rounded-lg px-8 py-12">
          <div className="grid xl:grid-cols-2 pt-12 mb-6 xl:mb-24">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-x-4 text-black text-lg mb-4">
                Thank you for sharing your images with us!
              </div>
              <p className="text-muted-foreground text-lg mb-8 font-light max-w-[400px]">
                We are thrilled to offer you the best solutions with our AI
                technologies. If you d like more information or want to learn
                more about our process, feel free to fill out our contact form.
                Our team will get back to you as soon as possible, providing a
                tailored response to your needs. We look forward to working with
                you!
              </p>
            </div>
            <div className="lg:mt-24">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

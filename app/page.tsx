import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-8">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">
              Welcome to Image Identifier
            </h1>
          </div>
        </div>
      </div>
      <Hero />
      <HomePage />
      {/* <Feedback /> */}
    </div>
  );
}

import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-gray-300"
      style={{
        backgroundImage: "url('/ai-hero.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
      <Hero />
      <HomePage />
      {/* <Feedback /> */}
    </div>
  );
}

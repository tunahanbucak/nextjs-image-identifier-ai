"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

export default function Feedback() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(feedback);
    setFeedback("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Geri bildiriminizi buraya yazın..."
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
          rows={4}
        />
        <Button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Gönder
        </Button>
      </form>
    </div>
  );
}

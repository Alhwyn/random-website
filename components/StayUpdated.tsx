"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export function StayUpdated() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call - replace with your actual newsletter signup logic
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setEmail("");
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  if (submitted) {
    return (
      <div className="flex flex-col sm:flex-row gap-2 max-w-md">
        <div className="flex items-center justify-center bg-green-50 border border-green-200 text-green-800 px-4 py-2 text-sm rounded">
          ✓ Thanks! We&apos;ll keep you updated
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row  max-w-md">
        <Input
          type="email"
          placeholder="STAY UPDATED "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
          className="flex-1 border-2 border-black focus-visible:ring-0 focus-visible:border-black"
        />
        <Button 
          type="submit"
          disabled={isSubmitting || !email}
          className="bg-black text-white hover:bg-black/80 border-black disabled:bg-black disabled:text-white disabled:opacity-70"
        >
          {isSubmitting ? "..." : "NOTIFY ME"}
        </Button>
      </form>
    </div>
  );
}

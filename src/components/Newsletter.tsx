"use client";

import toast from "react-hot-toast";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

export function NewsletterDemo() {
  const placeholders = [
    "Enter your email for updates!",
    "Join our community newsletter.",
    "Get the latest devblog news.",
    "Don't miss out on new posts!",
    "Subscribe to stay informed.",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("Input value:", e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for subscribing!", { id: "subscription-toast" });
  };

  return (
    <div className="flex flex-col gap-2 md:gap-4 text-white">
      <h1 className="text-sm md:text-base font-bold pb-2">NEWSLETTER</h1>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default NewsletterDemo;

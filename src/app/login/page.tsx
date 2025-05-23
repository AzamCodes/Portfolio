"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";
import toast,{Toaster} from "react-hot-toast";

const AdminLogin = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        toast.success("Logged in successfully!");
        // Redirect to the blog creation page (protected route)
        router.push("/admin/add-blog");
      } else {
        toast.error("Invalid credentials!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen">
        <div className="flex items-center  justify-center h-screen  bg-gray-700">
             <Toaster position="top-center" />
      <form className="my-4 md:my-8 flex flex-col gap-2 w-[400px] bg-black/25 h-fit px-8 py-12" onSubmit={handleSubmit}>
      <div>
        <LabelInputContainer>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            required
            disabled={isLoading}
            />
        </LabelInputContainer>
            </div>
            <div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </LabelInputContainer>
            </div>

        <motion.button
          whileTap={{ scale: 0.85 }}
          className="bg-gradient-to-br from-black to-neutral-600 block w-full text-white rounded-lg h-10 font-medium shadow-input"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </motion.button>
      </form>
      </div>
    </div>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
);

export default AdminLogin;

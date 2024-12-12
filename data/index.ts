import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export const footerLinks = [
  {
    id: 1,
    icon: BsGithub, // Reference the component
    href: "/",
  },
  {
    id: 2,
    icon: FaLinkedin,
    href: "/projects",
  },
  {
    id: 3,
    icon: FaInstagram,
    href: "/",
  },
];
// footerData.ts

export const usefulLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export const socialLinks = [
  { name: "LinkedIn", path: "https://linkedin.com/in/yourprofile" },
  { name: "Instagram", path: "https://instagram.com/yourprofile" },
  { name: "Github", path: "https://github.com/yourprofile" },
  { name: "Twitter", path: "https://twitter.com/yourprofile" },
];

export const liveProjects = [
  { name: "Primeattire", path: "https://primeattire.com" },
  { name: "Devblog", path: "https://devblog.com" },
  { name: "WebfolioX", path: "https://webfoliox.com" },
  { name: "Hot Restaurant", path: "https://hotrestaurant.com" },
];

export const projects = [
  {
    id: 1,
    title: "PrimeAttire Store",
    shortdesc: "Next.js Ecommerce Store",
    desc: "An ecommerce platform for stylish clothing, built using Next.js and Tailwind CSS.",
    img: "/primattire.png",
    prevlink: "https://primeattire.vercel.app/",
    githubLink: "https://github.com/azamcodes/primeattire",
    tags: ["Next Js", "Prisma", "NeonDB", "React"],
  },
  {
    id: 2,
    title: "WebfolioX",
    shortdesc: "React Task Management App",
    desc: "A task management app that helps teams track their progress with Kanban-style boards and deadline management.",
    img: "/pro1.png",
    prevlink: "https://tasktrackerpro.vercel.app/",
    githubLink: "https://github.com/azamcodes/tasktrackerpro",
    tags: ["Next Js", "Prisma", "NeonDB", "React"],
  },
  {
    id: 3,
    title: "DevBlog",
    shortdesc: "Next.js Blogging Platform",
    desc: `DevBlog is a modern and feature-rich blogging platform built with Next.js, Tailwind CSS, and ShadCN UI. It allows users to create, manage, and share their blogs with ease. Designed with a focus on performance and user experience, DevBlog offers an intuitive interface, responsive design, and various advanced features for both users and admins.`,
    coreFeatures: [
      "User Authentication: Secure sign-up, log-in, JWT-based authentication, email verification, and password recovery.",
      "Blog Creation and Management: Create and publish blogs, upload images, manage posts.",
      "Light/Dark Mode: Built-in theme switcher for a smooth user experience.",
      "Responsive Design: Fully responsive layout for all devices.",
      "Cloudinary Integration: Optimized image uploads for blog posts and profile pictures.",
      "SEO Optimization: Automatic metadata management for better search engine visibility.",
      "PWA Support: Add the site to the home screen and access it offline.",
      "Admin Dashboard: A powerful admin panel to manage user content and settings.",
    ],
    technologiesUsed: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Cloudinary",
      "JWT Authentication",
      "Prisma & NeonDB",
      "MongoDB",
    ],
    img: "/pro2.png",
    prevlink: "https://devblog.vercel.app/",
    githubLink: "https://github.com/azamcodes/devblog",
    tags: ["Next Js", "Prisma", "NeonDB", "React"],
  },

  {
    id: 4,
    title: "HOT RESTAURANT",
    shortdesc: "Recipe Sharing Platform",
    desc: "A platform where food lovers can share recipes, upload cooking videos, and get inspired by various cuisines.",
    img: "/restaurant.png",
    prevlink: "https://foodiehaven.vercel.app/",
    githubLink: "https://github.com/azamcodes/foodiehaven",
    tags: ["Next Js", "Prisma", "NeonDB", "React", "MongoDB"],
  },
  {
    id: 5,
    title: "FitnessTrackr",
    shortdesc: "Fitness Tracking App",
    desc: "A fitness tracking app that monitors workouts, diet, and goals, helping users stay on track with their fitness journey.",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prevlink: "https://fitnesstrackr.vercel.app/",
    githubLink: "https://github.com/azamcodes/fitnesstrackr",
    tags: ["Next Js", "Prisma", "NeonDB", "MySql"],
  },
  {
    id: 6,
    title: "CryptoLive",
    shortdesc: "Cryptocurrency Tracker",
    desc: "A live cryptocurrency tracker that provides real-time updates, price history, and market trends of various coins.",
    img: "https://images.unsplash.com/photo-1644363832001-0876e81f37a9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3J5cHRvfGVufDB8fDB8fHww",
    prevlink: "https://cryptolive.vercel.app/",
    githubLink: "https://github.com/azamcodes/cryptolive",
    tags: ["Next Js", "Prisma", "NeonDB", "Clerk Auth"],
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    classprovide: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full", // Ensure image covers full area
    titleClassName: "justify-end", // Align title to the bottom
    img: "/b1.svg", // Image path
    spareImg: "", // No spare image
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    classprovide: "lg:col-span-2 md:col-span-3 md:row-span-2", // Appropriate column and row span
    imgClassName: "", // Empty class for flexibility
    titleClassName: "justify-start", // Align title to the start
    img: "", // No main image
    spareImg: "", // No spare image
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve", // Added description for better detail
    classprovide: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "", // No specific image class
    titleClassName: "justify-center", // Center the title for this card
    img: "", // No main image
    spareImg: "", // No spare image
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    classprovide: "lg:col-span-2 md:col-span-3 md:row-span-1", // Shorter row span
    imgClassName: "", // No specific image class
    titleClassName: "justify-start", // Align title to the start
    img: "/grid.svg", // Image path
    spareImg: "/b4.svg", // Provide a backup image
  },
  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop", // More descriptive text
    classprovide: "md:col-span-3 md:row-span-2", // Span three columns in md breakpoint
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60", // Make image position responsive
    titleClassName: "justify-center md:justify-start lg:justify-center", // Adjust based on screen size
    img: "/b5.svg", // Main image path
    spareImg: "/grid.svg", // Spare image path
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    classprovide: "lg:col-span-2 md:col-span-3 bg-red-500 md:row-span-1", // Ensure bg-red is properly applied
    imgClassName: "", // No specific image class
    titleClassName: "justify-center md:max-w-full max-w-60 text-center", // Center title text
    img: "", // No main image
    spareImg: "", // No spare image
  },
];

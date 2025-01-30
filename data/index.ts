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
  { name: "Projects", path: "#projects" },
  { name: "Skills", path: "#skills" },
  { name: "Services", path: "#services" },
  { name: "Contact", path: "#contact" },
];

export const socialLinks = [
  { name: "LinkedIn", path: "https://linkedin.com/in/azamdev" },
  { name: "Instagram", path: "https://instagram.com/_azam.shaikh_" },
  { name: "Github", path: "https://github.com/azamcodes" },
  { name: "Twitter", path: "https://twitter.com/azamcodes" },
];

export const liveProjects = [
  { name: "PrimeAttire", path: "https://primeattire.vercel.app" },
  { name: "Devblog", path: "https://devbloghub.vercel.app" },
  { name: "WebfolioX", path: "https://webfoliox.vercel.app" },
  { name: "E-STORE", path: "https://estore-org.vercel.app" },
];

export const projects = [
  {
    id: 1,
    title: "PrimeAttire - Modern SaaS E-Commerce Platform",
    shortdesc:
      "A scalable e-commerce platform with a dynamic storefront and admin dashboard.",
    desc: `PrimeAttire is a scalable SaaS-based e-commerce platform featuring a dynamic customer-facing storefront and a feature-rich admin dashboard (AdminDesk). Designed for user-friendliness, business scalability, and seamless management, PrimeAttire empowers businesses to create multiple stores and manage products, categories, and promotional billboards. Customers enjoy a hassle-free shopping experience, while store owners benefit from intuitive management tools. Built with modern technologies, PrimeAttire delivers responsive design, real-time synchronization, and efficient state handling for a next-gen e-commerce experience.`,

    coreFeatures: [
      // Storefront Features
      "Guest-Friendly Shopping: Customers can browse, add products to their cart, and proceed to checkout without user authentication.",
      "Advanced Product Filtering: Customers can filter products by size, color, and categories for a personalized shopping experience.",
      "Cart Integration: Seamlessly view selected items, remove products, and proceed to secure Stripe-powered checkout.",
      "Responsive Design: Fully optimized for all devices, ensuring a smooth experience on mobile, tablet, and desktop.",
      "SEO Optimization: Automatically generates metadata to boost search engine visibility.",
      "Cloudinary Integration: Optimized image delivery for products, categories, and promotional billboards.",

      // Admin Dashboard Features
      "Product Management: Add, edit, and delete products with details such as pricing, size, color, and stock availability.",
      "Multi-Category Management: Create multiple categories and link them with billboards and products for dynamic organization.",
      "Promotional Billboards: Highlight offers and promotions with customizable billboards.",
      "Real-Time Synchronization: Instant updates between the admin dashboard and storefront via seamless API integration.",
      "Multi-Tenancy SaaS Capability: Supports multiple store owners, enabling them to manage independent stores efficiently.",
      "State Management: Powered by Zustand for smooth and scalable state handling.",
      "Secure Stripe Integration: Simplifies payment processing with Stripe-powered checkout for a fast and secure experience.",
      "Elegant ShadCN UI: A clean, intuitive admin dashboard interface for managing stores, products, and categories.",
    ],

    technologiesUsed: [
      "Next.js 13",
      "React",
      "Tailwind CSS",
      "ShadCN UI",
      "Zustand",
      "Prisma ORM",
      "NeonDB",
      "Clerk Authentication",
      "Cloudinary",
      "Stripe",
    ],

    img: "/primeattire.png", // Replace with your actual image path
    prevlink: "https://primeattire.vercel.app/", // Deployment link
    githubLink: "https://github.com/azamcodes/primeattire", // GitHub repository link

    tags: [
      "Next.js",
      "React",
      "Prisma",
      "Tailwind CSS",
      "NeonDB",
      "Stripe",
      "ShadCN UI",
      "Zustand",
      "Cloudinary",
      "SaaS",
    ],
  },
  {
    id: 2,
    title: "WebfolioX - Interactive Portfolio Website",
    shortdesc:
      "Showcase your work with a modern, animated portfolio built with Next.js.",
    desc: `WebfolioX is an interactive portfolio website crafted with Next.js 13 and Framer Motion. It features a modern design, smooth animations, and showcases professional projects, case studies, and testimonials. The platform emphasizes responsive design, clean layouts, and seamless navigation, making it ideal for creative professionals to display their work and connect with clients.`,
    coreFeatures: [
      "Dynamic Header: Includes a logo, home, and contact buttons with interactive background effects.",
      "Social Media Integration: Links to platforms like YouTube for broader connectivity.",
      "Hero Section: Engaging introductory text and purpose statement.",
      "Case Study Section: Highlights professional work with clickable details for more information.",
      "Testimonials: Showcases client reviews with smooth motion effects.",
      "Services Section: Sleek service descriptions with animations powered by Framer Motion.",
      "Work Section: Highlights key projects with interactive elements.",
      "About Section: Provides company details, mission, and team information.",
      "Footer: Responsive and aesthetically pleasing design with navigation links and social media icons.",
      "Newsletter Form: Includes a newsletter subscription feature with modern design elements.",
      "Reusable Components: Ensures consistent design across pages like contact and work.",
      "Responsive Design: Fully optimized for all devices using Tailwind CSS.",
      "Animation Integration: Interactive animations throughout for an engaging user experience.",
    ],
    technologiesUsed: [
      "Next.js 13",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "SVG Icons",
    ],
    img: "/pro1.png", // Replace with your actual image path
    prevlink: "https://webfoliox.vercel.app/", // Deployment link
    githubLink: "https://github.com/azamcodes/webfoliox", // GitHub repository link
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
  },
  {
    id: 3,
    title: "DevBlog - Next.js Blogging Platform",
    shortdesc:
      "A feature-rich blogging platform for creating and managing blogs.",
    desc: `DevBlog is a modern blogging platform built with Next.js, Tailwind CSS, and ShadCN UI. It allows users to create, manage, and share their blogs with ease. With a focus on performance and user experience, DevBlog offers an intuitive interface, responsive design, and various advanced features for both users and admins, including user authentication and SEO optimization.`,
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
    prevlink: "https://devbloghub.vercel.app/",
    githubLink: "https://github.com/azamcodes/devbloghub",
    tags: ["Next Js", "Prisma", "NeonDB", "React"],
  },

  {
    id: 4,
    title: "E-Store - Fully Functional E-commerce Website",
    shortdesc:
      "A modern e-commerce platform built with the MERN stack and Stripe CMS.",
    desc: `E-Store is a fully functional e-commerce website built using the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS. It provides a seamless shopping experience with features such as product browsing, shopping cart management, secure payments using Stripe CMS, and order tracking. The website is fully responsive and optimized for both mobile and desktop devices, ensuring a smooth user experience.`,
    img: "/e-store.png", // Add the image path for your project
    prevlink: "https://estore-org.vercel.app/",
    githubLink: "https://github.com/azamcodes/estore", // Update the GitHub link to your repository
    coreFeatures: [
      "Fully Responsive: Optimized for all devices including desktops, tablets, and smartphones.",
      "Product Management (via Stripe CMS): Store owner can add, edit, and manage product details such as title, description, price, and stock availability directly through Stripe CMS integration.",
      "Shopping Cart: Users can add, remove, and view items in their cart.",
      "Stripe CMS Integration: Secure and seamless payment processing through Stripe CMS for handling transactions.",
      "Order Tracking: Users can track their orders in real-time post-purchase.",
    ],
    technologiesUsed: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe CMS",
      "JWT (JSON Web Tokens)",
    ],
    tags: ["E-commerce", "MERN", "React", "Tailwind CSS", "Stripe"],
  },
];

// export const gridItems = [
//   {
//     id: 1,
//     title: "I prioritize client collaboration, fostering open communication",
//     description: "",
//     classprovide: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
//     imgClassName: "w-full h-full", // Ensure image covers full area
//     titleClassName: "justify-end", // Align title to the bottom
//     img: "/b1.svg", // Image path
//     spareImg: "", // No spare image
//   },
//   {
//     id: 2,
//     title: "I'm very flexible with time zone communications",
//     description: "",
//     classprovide: "lg:col-span-2 md:col-span-3 md:row-span-2", // Appropriate column and row span
//     imgClassName: "", // Empty class for flexibility
//     titleClassName: "justify-start", // Align title to the start
//     img: "", // No main image
//     spareImg: "", // No spare image
//   },
//   {
//     id: 3,
//     title: "My tech stack",
//     description: "I constantly try to improve", // Added description for better detail
//     classprovide: "lg:col-span-2 md:col-span-3 md:row-span-2",
//     imgClassName: "", // No specific image class
//     titleClassName: "justify-center", // Center the title for this card
//     img: "", // No main image
//     spareImg: "", // No spare image
//   },
//   {
//     id: 4,
//     title: "Tech enthusiast with a passion for development.",
//     description: "",
//     classprovide: "lg:col-span-2 md:col-span-3 md:row-span-1", // Shorter row span
//     imgClassName: "", // No specific image class
//     titleClassName: "justify-start", // Align title to the start
//     img: "/grid.svg", // Image path
//     spareImg: "/b4.svg", // Provide a backup image
//   },
//   {
//     id: 5,
//     title: "Currently building a JS Animation library",
//     description: "The Inside Scoop", // More descriptive text
//     classprovide: "md:col-span-3 md:row-span-2", // Span three columns in md breakpoint
//     imgClassName: "absolute right-0 bottom-0 md:w-96 w-60", // Make image position responsive
//     titleClassName: "justify-center md:justify-start lg:justify-center", // Adjust based on screen size
//     img: "/b5.svg", // Main image path
//     spareImg: "/grid.svg", // Spare image path
//   },
//   {
//     id: 6,
//     title: "Do you want to start a project together?",
//     description: "",
//     classprovide: "lg:col-span-2 md:col-span-3 bg-red-500 md:row-span-1", // Ensure bg-red is properly applied
//     imgClassName: "", // No specific image class
//     titleClassName: "justify-center md:max-w-full max-w-60 text-center", // Center title text
//     img: "", // No main image
//     spareImg: "", // No spare image
//   },
// ];

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
    title: "PrimeAttire",
    shortdesc:
      "Modern SaaS E-Commerce Platform with Storefront and Admin Dashboard",
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
    title: "WebfolioX",
    shortdesc:
      "Interactive Portfolio Website Built with Next.js 13 and Framer Motion",
    desc: "WebfolioX is a dynamic portfolio website crafted with Next.js 13, showcasing modern design and smooth animations powered by Framer Motion. The platform highlights professional projects, case studies, and testimonials, offering a visually appealing and interactive user experience. WebfolioX emphasizes responsive design, clean layouts, and seamless navigation to present content effectively, making it ideal for creative professionals to display their work and connect with clients.",
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
    prevlink: "https://devbloghub.vercel.app/",
    githubLink: "https://github.com/azamcodes/devbloghub",
    tags: ["Next Js", "Prisma", "NeonDB", "React"],
  },

  {
    id: 4,
    title: "HOT RESTAURANT",
    shortdesc: "Fully Responsive Food/Restaurant Website",
    desc: "This is a beautifully designed and fully responsive restaurant website built using HTML, CSS, and JavaScript. The website features a modern and user-friendly interface, catering to restaurant owners and food enthusiasts. It includes essential sections like Home, About, Menu, Our Customers, and Contact Us, each designed to deliver a seamless experience across all devices.",
    img: "/restaurant.png",
    prevlink: "https://foodiehaven.vercel.app/",
    githubLink: "https://github.com/azamcodes/foodiehaven",
    coreFeatures: [
      "Responsive Design: Optimized for all devices including desktops, tablets, and smartphones.",
      "Interactive Menu: A visually appealing menu showcasing dishes with images and descriptions.",
      "Customer Testimonials: A dedicated section to highlight positive reviews from customers.",
      "Contact Form: Easy-to-use form for inquiries, reservations, or feedback.",
      "Smooth Navigation: Intuitive layout and smooth scrolling for a great user experience.",
      "Modern Animations: Eye-catching animations for an engaging and dynamic website.",
    ],
    technologiesUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Web Animations",
    ],
    tags: ["Restaurant", "Website", "Responsive"],
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

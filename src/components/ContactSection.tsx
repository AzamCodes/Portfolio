"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Framer from "./ui/Framer";
import Link from "next/link";
import { Linkedin, Github, Instagram, Mail, FileText } from "lucide-react";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/Textarea";
import { HoverEffectBox } from "./ui/HoverEffectBox";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { Spotlight } from "./ui/Spotlight";
import { sendEmail } from "@/utils/sendEmail";
interface ContactSectionProps {
  id: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

//   const triggerEmail = async (templateParams: {
//     user_firstname: string;
//     user_lastname: string;
//     to_name: string;
//     user_message: string;
//     user_email: string;
//   }) => {
//     try {
//       await emailjs.send(
//         process.env.NEXT_PUBLIC_NEXREACT_SERVICE_ID ?? "",
//         process.env.NEXT_PUBLIC_NEXREACT_TEMPLATE_ID ?? "",
//         templateParams,
//         process.env.NEXT_PUBLIC_NEXREACT_PUBLIC_ID!
//       );
//       toast.success("Thank you for your message!");
//     } catch (err) {
//       // console.error("Email sending failed:", err);
//       toast.error("Something went wrong");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!firstname || !lastname) {
//       return;
//     }
//     if (!email) {
//       return;
//     }
//     if (!message) {
//       return;
//     }
//     setIsLoading(true);
//     // console.log("Input Values:");
//     // console.log("Firstname:", firstname);
//     // console.log("Lastname:", lastname);
//     // console.log("Email:", email);
//     // console.log("Message:", message);

//     const templateParams = {
//       user_firstname: firstname,
//       user_lastname: lastname,
//       to_name: "Azam Shaikh",
//       user_message: message,
//       user_email: email,
//     };

//     // console.log("Template Params:", templateParams);
//     triggerEmail(templateParams);
// await sendEmail(templateParams,()=>{

  
//   // Clear input fields after submission
//   setFirstname("");
//   setLastname("");
//   setEmail("");
//   setMessage("");
// }
// )
// };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!firstname || !lastname || !email || !message) return;

  setIsLoading(true);
  try {
    await sendEmail(
      firstname,
      lastname,
      email,
      message,
      () => {
        setFirstname("");
        setLastname("");
        setEmail("");
        setMessage("");
      }
    );
  } catch (err) {
    console.error(err);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="py-24 bg-black/95 text-white px-6" id={id}>
      <Toaster position="top-center" />
      <div className="text-center pb-8 md:pb-12">
        <h1 className="text-5xl font-agrandirGrandHeavy z-10 -tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#F0F0F0] to-[#DADADA]">
          GET IN TOUCH
        </h1>
      </div>

      <div className="flex flex-col md:flex-row max-w-4xl mx-auto gap-8">
        <div className="w-full relative md:w-1/2 rounded-2xl py-3 p-3 md:p-8 shadow-input bg-white dark:bg-black">
          <Spotlight
            className="absolute left-16 -top-48  md:-bottom-44 md:left-1/2 transform -translate-y-2/3 z-40 h-60 md:h-44 w-full -rotate-90"
            fill="purple"
          />

          <h2 className="font-agrandirTextBold mt-2 text-xl text-neutral-800 dark:text-neutral-200">
            Drop Me a Message
          </h2>
          <form className="my-4 md:my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  type="text"
                  required
                  disabled={isLoading}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  type="text"
                  required
                />
              </LabelInputContainer>
            </div>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Send a message..."
                required
              />
            </LabelInputContainer>

            <motion.button
              whileTap={{ scale: 0.85 }}
              className="bg-gradient-to-br from-black to-neutral-600 block w-full text-white rounded-lg h-10 font-medium shadow-input"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Contact Me"}
            </motion.button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="relative shadow-input-contact w-full md:w-1/2 rounded-lg md:rounded-2xl p-2 md:p-4 overflow-hidden">
          {/* Top-Left Torchlight */}
          <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-[#cd28ee] opacity-30 blur-[150px] rounded-full pointer-events-none z-0" />

          {/* Bottom-Right Torchlight */}
          <div className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-[#35A8D4] opacity-30 blur-[125px] rounded-full pointer-events-none z-0" />

          {/* Shadow Wrapper */}
          <div className="absolute inset-0 -z-10 rounded-lg md:rounded-2xl bg-gradient-to-r from-[#AC10CB] to-[#35A8D4] p-[2px]">
            <div className="w-full h-full bg-white dark:bg-black rounded-[inherit]" />
          </div>

          {/* Main Content with Glass Effect */}
          <div className="relative z-20 bg-inherit rounded-lg py-4 p-2 md:p-6">
            <h2 className="font-agrandirTextBold text-xl text-neutral-800 text-transparent bg-clip-text bg-gradient-to-r from-[#A957F7] to-[#E7D2FF]">
              Contact Me
            </h2>
            <div className="space-y-6 mt-4 rounded-xl">
              <div className="bg-black/5 border border-gray-800 backdrop-filter backdrop-blur-lg bg-opacity-10  shadow-lg ring-1 ring-black/5 rounded-xl">
                <HoverEffectBox color="blue">
                  <ContactDetailsButton
                    icon={<Mail size={22} className="text-blue-500" />}
                    title="Email"
                    subtitle="contact@azamportfolio.com"
                    link="mailto:contact@azamportfolio.com"
                  />
                </HoverEffectBox>
              </div>
              <div className="bg-black/5 border border-gray-800 backdrop-filter backdrop-blur-lg bg-opacity-10  shadow-lg ring-1 ring-black/5 rounded-xl">
                <HoverEffectBox color="green">
                  <ContactDetailsButton
                    icon={<FaWhatsapp size={22} className="text-green-500" />}
                    title="WhatsApp"
                    subtitle="+91 859 127 2660"
                    link="https://wa.me/1234567890"
                  />
                </HoverEffectBox>
              </div>
              <div className="bg-black/5 border border-gray-800 backdrop-filter backdrop-blur-lg bg-opacity-10  shadow-lg ring-1 ring-black/5 rounded-xl">
                <HoverEffectBox color="purple">
                  <ContactDetailsButton
                    icon={<FileText size={22} className="text-purple-500" />}
                    title="WhatsApp"
                    subtitle="+91 859 127 2660"
                    link="https://wa.me/1234567890"
                  />
                  {/* <button
                    onClick={() => setShowPdfViewer(!showPdfViewer)} // Toggle the PDF viewer
                    className="flex items-center gap-2 w-full text-left bg-transparent cursor-pointer"
                  >
                    <FileText size={22} className="text-purple-500" />
                    <div>
                      <h3 className="text-base sm:text-lg font-agrandirRegular tracking-wide text-neutral-700 dark:text-neutral-300">
                        Resume
                      </h3>
                      <p className="text-neutral-600 font-agrandirWideLight tracking-wider text-xs sm:text-sm dark:text-neutral-400">
                        View Resume
                      </p>
                    </div>
                  </button> */}
                </HoverEffectBox>
              </div>
              {/* Social Media Links */}
              <div className="flex justify-center mx-auto items-center gap-3">
                <div className="bg-black/5 border border-gray-800 backdrop-filter backdrop-blur-lg bg-opacity-10  shadow-lg ring-1 ring-black/5 rounded-xl">
                  <HoverEffectBox color="blue">
                    <SocialLink
                      href="https://www.linkedin.com/in/azam05"
                      icon={Linkedin}
                      alt="LinkedIn"
                    />
                  </HoverEffectBox>
                </div>
                <div className="bg-black/5 border border-gray-800 backdrop-filter backdrop-blur-lg bg-opacity-10  shadow-lg ring-1 ring-black/5 rounded-xl">
                  <HoverEffectBox color="white">
                    <SocialLink
                      href="https://github.com/azamcodes"
                      icon={Github}
                      alt="GitHub"
                    />
                  </HoverEffectBox>
                </div>
                <div className="bg-black/5 border border-gray-800 backdrop-filter backdrop-blur-lg bg-opacity-10  shadow-lg ring-1 ring-black/5 rounded-xl">
                  <HoverEffectBox color="instagram">
                    <SocialLink
                      href="https://www.instagram.com/_azam.shaikh_/"
                      icon={Instagram}
                      alt="Instagram"
                    />
                  </HoverEffectBox>
                </div>
              </div>
            </div>
          </div>
        </div>
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

const ContactDetailsButton = ({
  icon,
  title,
  subtitle,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  link: string;
}) => (
  <div className="group bg-transparent">
    <button
      onClick={() => {
        console.log("Opening link:", link); // Debugging log
        window.open(link, "_blank");
      }}
      className="flex items-center gap-2 w-full text-left bg-transparent cursor-pointer"
    >
      <Framer>{icon}</Framer>
      <div>
        <h3 className="text-base sm:text-lg font-agrandirRegular tracking-wide text-neutral-700 dark:text-neutral-300">
          {title}
        </h3>
        <p className="text-neutral-600 font-agrandirWideLight tracking-wider text-xs sm:text-sm dark:text-neutral-400">
          {subtitle}
        </p>
      </div>
    </button>
  </div>
);

const SocialLink = ({
  href,
  icon: Icon,
  alt,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  alt: string;
}) => (
  <div className=" bg-transparent flex items-center justify-center ">
    <Framer>
      <div>
        {" "}
        {/* Wrapping Link inside a div */}
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={alt}
        >
          <Icon className="text-neutral-700 md:text-[48px] dark:text-neutral-300" />
        </Link>
      </div>
    </Framer>
  </div>
);

export default ContactSection;

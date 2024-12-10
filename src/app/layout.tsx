import localfont from "next/font/local";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

// Define different variants of Agrandir font
const agrandirGrandHeavy = localfont({
  src: [
    {
      path: "../../public/font/Agrandir-GrandHeavy.ttf",
      weight: "700",
    },
  ],
  variable: "--font-agrandir-grandheavy",
});

const agrandirGrandLight = localfont({
  src: [
    {
      path: "../../public/font/Agrandir-GrandLight.ttf",
      weight: "300", // Adjust based on the actual weight of the font
    },
  ],
  variable: "--font-agrandir-grandlight",
});

const agrandirNarrow = localfont({
  src: [
    {
      path: "../../public/font/Agrandir-Narrow.ttf",
      weight: "500", // Adjust based on actual font weight
    },
  ],
  variable: "--font-agrandir-narrow",
});

const agrandirRegular = localfont({
  src: [
    {
      path: "../../public/font/Agrandir-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-agrandir-regular",
});

const agrandirTextBold = localfont({
  src: [
    {
      path: "../../public/font/Agrandir-TextBold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-agrandir-textbold",
});

const agrandirThinItalic = localfont({
  src: [
    {
      path: "../../public/font/Agrandir-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--font-agrandir-thinitalic",
});

const agrandirTight = localfont({
  src: [
    {
      path: "../../public/font/Agrandir-Tight.ttf",
      weight: "600",
    },
  ],
  variable: "--font-agrandir-tight",
});

const agrandirWideBlackItalic = localfont({
  src: [
    {
      path: "../../public/font/Agrandir-WideBlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-agrandir-wideblackitalic",
});

const agrandirWideLight = localfont({
  src: [
    {
      path: "../../public/font/Agrandir-WideLight.ttf",
      weight: "200",
    },
  ],
  variable: "--font-agrandir-widelight",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created By Azam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${agrandirGrandHeavy.variable} ${agrandirGrandLight.variable} ${agrandirNarrow.variable} ${agrandirRegular.variable} ${agrandirTextBold.variable} ${agrandirThinItalic.variable} ${agrandirTight.variable} ${agrandirWideBlackItalic.variable} ${agrandirWideLight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

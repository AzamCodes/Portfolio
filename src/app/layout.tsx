import localfont from "next/font/local";
import { Metadata } from "next";
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
  title: "Portfolio - Azam Shaikh",
  description:
    "Created By Azam - A portfolio showcasing my work and skills in web development.",
  keywords: [
    "portfolio, web development, Azam Shaikh, projects, skills, full-stack developer",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Portfolio - Azam Shaikh",
    description:
      "Created By Azam - A portfolio showcasing my work and skills in web development.",
    url: "https://www.azamportfolio.com",
    siteName: "Azam Portfolio",
    images: [
      {
        url: "https://www.azamportfolio.com/public/azamporfolio.png",
        width: 800,
        height: 600,
        alt: "Homepage of Azam Shaikh's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Azam Shaikh",
    description:
      "Created By Azam - A portfolio showcasing my work and skills in web development.",
    images: [
      {
        url: "https://www.azamportfolio.com/azamportfolio.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Azam Shaikh",
              url: "https://www.azamportfolio.com",
              sameAs: [
                "https://www.linkedin.com/in/azamdev",
                "https://github.com/azamcodes",
                "https://www.instagram.com/_azam.shaikh_/",
              ],
              jobTitle: "Web Developer",
              worksFor: {
                "@type": "Organization",
                name: "Celunox",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${agrandirGrandHeavy.variable} ${agrandirGrandLight.variable} ${agrandirNarrow.variable} ${agrandirRegular.variable} ${agrandirTextBold.variable} ${agrandirThinItalic.variable} ${agrandirTight.variable} ${agrandirWideBlackItalic.variable} ${agrandirWideLight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

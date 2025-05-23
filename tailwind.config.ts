import defaultTheme from "tailwindcss/defaultTheme";
import svgToDataUri from "mini-svg-data-uri";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(315deg, #21D4FD 0%, #B721FF 100%)",
        "custom-gradient-hover":
          "linear-gradient(315deg, #8B44B3 0%, #351469 100%)",
      },
      boxShadow: {
        innerCustom:
          "inset 0 4px 6px rgba(0, 0, 0, 0.1), inset 0 -4px 6px rgba(0, 0, 0, 0.1)",
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
        customShadow: `0 6px 20px rgba(0, 0, 0, 0.3)`,
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        agrandirGrandHeavy: [
          "var(--font-agrandir-grandheavy)",
          ...defaultTheme.fontFamily.sans, // Use defaultTheme.fontFamily.sans
        ],
        agrandirGrandLight: [
          "var(--font-agrandir-grandlight)",
          ...defaultTheme.fontFamily.sans,
        ],
        agrandirNarrow: [
          "var(--font-agrandir-narrow)",
          ...defaultTheme.fontFamily.sans,
        ],
        agrandirRegular: [
          "var(--font-agrandir-regular)",
          ...defaultTheme.fontFamily.sans,
        ],
        agrandirTextBold: [
          "var(--font-agrandir-textbold)",
          ...defaultTheme.fontFamily.sans,
        ],
        agrandirThinItalic: [
          "var(--font-agrandir-thinitalic)",
          ...defaultTheme.fontFamily.sans,
        ],
        agrandirTight: [
          "var(--font-agrandir-tight)",
          ...defaultTheme.fontFamily.sans,
        ],
        agrandirWideBlackItalic: [
          "var(--font-agrandir-wideblackitalic)",
          ...defaultTheme.fontFamily.sans,
        ],
        agrandirWideLight: [
          "var(--font-agrandir-widelight)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        colorCycle: "colorCycle 2s infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        colorCycle: {
          "0%, 100%": { color: "#a855f7" },
          "25%": { color: "#22c55e" },
          "50%": { color: "#3b82f6" },
          "75%": { color: "#facc15" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
        borderColorAnimation: {
          "0%": {
            borderColor: "transparent",
          },
          "50%": {
            borderColor: "#22c55e", // Green
          },
          "100%": {
            borderColor: "#facc15", // Yellow
          },
        },
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: { matchUtilities: any; theme: any }) {
      matchUtilities(
        {
          "bg-dot-thick": (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

export default config;

function addVariablesForColors({
  addBase,
  theme,
}: {
  addBase: any;
  theme: any;
}) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

declare module "tailwindcss/lib/util/flattenColorPalette" {
  export default function flattenColorPalette(colors: any): any;
}

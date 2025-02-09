import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px", // New xs breakpoint
        ...defaultTheme.screens, // Preserve default Tailwind breakpoints
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        display: [
          ["Poppins", ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
      colors: {
        "primary-accent":"#24ae7c",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
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
      },
    },
  },
  plugins: [],
} satisfies Config;


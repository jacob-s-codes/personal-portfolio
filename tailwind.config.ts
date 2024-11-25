import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#000000", // Orange-Red
          secondary: "#FFD700", // Gold
          accent: "#FACC15", // Yellow
          neutral: "#2E2E2E", // Dark gray for cards and neutral sections
          "base-100": "#ebf2f2", // Dark background for sunset theme
          "base-200": "#3B3B3B", // Slightly lighter background
          "base-300": "#4B4B4B", // Another background variation
          info: "#3ABFF8", // Blue for informational elements
          success: "#36D399", // Green for success messages
          warning: "#FBBD23", // Yellow for warnings
          error: "#F87272", // Red for errors
        }

      },
       // Keep the default light theme
      {
        sunset: {
          primary: "#FFFFFF", // Orange-Red
          secondary: "#FFD700", // Gold
          accent: "#FACC15", // Yellow
          neutral: "#2E2E2E", // Dark gray for cards and neutral sections
          "base-100": "#1f1e1e", // Dark background for sunset theme
          "base-200": "#3B3B3B", // Slightly lighter background
          "base-300": "#4B4B4B", // Another background variation
          info: "#3ABFF8", // Blue for informational elements
          success: "#36D399", // Green for success messages
          warning: "#FBBD23", // Yellow for warnings
          error: "#F87272", // Red for errors
        },
      },
    ],
  },
};

export default config;

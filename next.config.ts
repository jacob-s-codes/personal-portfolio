import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/personal-portfolio', // Replace 'repository-name' with your GitHub repository name
  images: {
    unoptimized: true, // Needed for static hosting like GitHub Pages
  },
};

export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during production builds to prevent build failures
  eslint: {
    // Warning: This only disables ESLint for the build process, not during development
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;

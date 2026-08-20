/** @type {import('next').NextConfig} */
const nextConfig = {
  // Xuat static -> deploy duoc len Vercel, Netlify, GitHub Pages...
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;

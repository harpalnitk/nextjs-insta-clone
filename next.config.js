/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://nextjs-insta-clone-rmsnzv70b-harpalnitk.vercel.app',
        port: '',
        pathname: '*/**',
      },
    ],
  },
}

module.exports = nextConfig

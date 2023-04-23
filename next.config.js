/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjs-insta-clone-rmsnzv70b-harpalnitk.vercel.app',
        port: '',
        pathname: '*/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/nextjs-insta-clone-16003.appspot.com/o/insta-posts/**',
      },
    ],
  },
}

module.exports = nextConfig

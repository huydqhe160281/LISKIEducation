/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://liskieducation.vercel.app/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

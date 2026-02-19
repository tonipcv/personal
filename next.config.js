/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  
  async redirects() {
    return [
      {
        source: '/india',
        destination: 'https://www.linkedin.com/in/indiapiercy/',
        permanent: true,
      },
      {
        source: '/toni',
        destination: 'https://www.linkedin.com/in/antonioni/',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/transcript',
        destination: 'http://localhost:8000/api/transcript',
      },
    ]
  },
}

module.exports = nextConfig 
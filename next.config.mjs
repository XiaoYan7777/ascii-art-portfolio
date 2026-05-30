/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/xiaoyan',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

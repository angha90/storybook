import withImages from 'next-images'

/** @type {import('next').NextConfig} */
const nextConfig = withImages({
  eslint: {
    dirs: ['.'] // Specify directories explicitly, including root
  }
})

export default nextConfig

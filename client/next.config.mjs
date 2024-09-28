// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'pm-s3-images-nextjs.s3.us-east-2.amazonaws.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  
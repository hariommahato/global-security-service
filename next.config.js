/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:["www.ksecurity.com.np"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env:{
    NEXT_MONGODB_URL:"mongodb+srv://global:global@cluster0.o9mmtes.mongodb.net/?retryWrites=true&w=majority",
    CLOUDINARY_NAME:"dijky1jjg",
    CLOUDINARY_API_KEY:"557477556585753",
    CLOUDINARY_API_SECRET:"sEE6XWIEmTmIvxFnr7Xkvg5HkMs",
    NEXTAUTH_SECRET:"asfsdfkulsghdfbjkshdfv"
  }
};

module.exports = nextConfig;

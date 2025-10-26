/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      domains: ['lh3.googleusercontent.com', 'githubusercontent.com','fakestoreapi.com' ,'randomuser.me'], // Allow Google and GitHub profile image URLs
    },
  };
  
  export default nextConfig;
  

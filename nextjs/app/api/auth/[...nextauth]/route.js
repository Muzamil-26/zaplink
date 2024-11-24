import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google';
import axios from "axios";

const authOptions = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,  // Environment variable for GitHub Client ID
      clientSecret: process.env.GITHUB_SECRET, // Environment variable for GitHub Secret
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,  // Environment variable for Google Client ID
      clientSecret: process.env.GOOGLE_SECRET,  // Environment variable for Google Secret
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        const response = await axios.post('https://zaplink.onrender.com/register', {
          user, // Pass the user details
        });
    
        return response.data.success; // Allow or deny sign-in based on backend response
      } catch (error) {
        console.error('Error during sign-in:', error);
        return false; // Deny sign-in on error
      }
    },
  }
})

export {authOptions as GET , authOptions as POST}
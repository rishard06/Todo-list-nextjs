import GitHub from "next-auth/providers/github"; // Or your provider

export const authConfig = {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    // Add other providers as needed
  ],
  secret: process.env.AUTH_SECRET, // Required for session encryption
  trustHost: true, // Required for production
  // Add other necessary configurations
};
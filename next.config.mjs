// next.config.mjs
import { config } from 'dotenv';

config(); // Load .env files into process.env

export default {
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // Add any public variables here
    },
};

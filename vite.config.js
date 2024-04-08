import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import replace from "@rollup/plugin-replace";
import dotenv from "dotenv";

// Load variables from .env file
dotenv.config();

const apiKey = process.env.API_KEY;

if (!apiKey) {
  throw new Error("API_KEY is missing in the environment variables. Please set it in your .env file.");
}

export default defineConfig({
  plugins: [
    react(),
    replace({
      __API_KEY__: JSON.stringify(apiKey),
    }),
  ],
});

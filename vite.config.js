import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative asset paths work on the project site URL and on a custom domain.
export default defineConfig({ base: "./", plugins: [react()] });

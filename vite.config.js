import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/wingspan-vite/",
  resolve: {
    alias: {
      "@": "/src", // This points '@' to your src directory
    },
  },
});

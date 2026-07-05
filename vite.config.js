import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

// Deployed at https://eva-s-cheng.com/ (custom domain, GitHub Pages)
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    {
      // GitHub Pages serves 404.html for unknown paths; copying the SPA
      // entry there makes deep links like /research load correctly.
      name: "spa-404-fallback",
      closeBundle() {
        copyFileSync(resolve("dist/index.html"), resolve("dist/404.html"));
      },
    },
  ],
});
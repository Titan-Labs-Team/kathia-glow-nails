import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    preset: "vercel",
  },
  plugins: [
    tanstackStart({
      server: {
        preset: "vercel",
      },
    }),
    viteReact(),
    tailwindcss(),
    viteTsconfigPaths(),
  ],
});

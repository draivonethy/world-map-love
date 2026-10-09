import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Pure Vite SPA config — sem SSR, sem Nitro, sem TanStack Start.
// Gera build estático em /dist, compatível com Netlify, Vercel, GitHub Pages.
export default defineConfig({
  plugins: [
    // Auto-gera routeTree.gen.ts ao detectar mudanças em src/routes/
    TanStackRouterVite({ routesDirectory: "./src/routes" }),
    react(),
    tsconfigPaths(),
  ],
  build: {
    outDir: "dist",
    // Gera source maps apenas em dev, economizando tamanho em prod
    sourcemap: false,
    rollupOptions: {
      // Entrada padrão do Vite SPA — index.html na raiz
      input: "index.html",
    },
  },
});

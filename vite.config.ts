import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import Sitemap from 'vite-plugin-sitemap'; // <--- Importe o plugin

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    // Adicione a configuração do Sitemap aqui:
    Sitemap({
      hostname: 'https://seusite.com.br', // Substitua pela sua URL real
      dynamicRoutes: [
        '/',
        '/portfolio',
        '/politica-de-privacidade',
        '/termos-de-uso'
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
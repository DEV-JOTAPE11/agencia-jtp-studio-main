// vite.config.ts
import { defineConfig } from "file:///C:/Users/joaop/OneDrive/%C3%81rea%20de%20Trabalho/agencia-jtp-studio-main/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/joaop/OneDrive/%C3%81rea%20de%20Trabalho/agencia-jtp-studio-main/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///C:/Users/joaop/OneDrive/%C3%81rea%20de%20Trabalho/agencia-jtp-studio-main/node_modules/lovable-tagger/dist/index.js";
import Sitemap from "file:///C:/Users/joaop/OneDrive/%C3%81rea%20de%20Trabalho/agencia-jtp-studio-main/node_modules/vite-plugin-sitemap/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\joaop\\OneDrive\\\xC1rea de Trabalho\\agencia-jtp-studio-main";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Adicione a configuração do Sitemap aqui:
    Sitemap({
      hostname: "https://www.jtpservices.com.br/",
      // Substitua pela sua URL real
      dynamicRoutes: [
        "/",
        "/portfolio",
        "/politica-de-privacidade",
        "/termos-de-uso"
      ]
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqb2FvcFxcXFxPbmVEcml2ZVxcXFxcdTAwQzFyZWEgZGUgVHJhYmFsaG9cXFxcYWdlbmNpYS1qdHAtc3R1ZGlvLW1haW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGpvYW9wXFxcXE9uZURyaXZlXFxcXFx1MDBDMXJlYSBkZSBUcmFiYWxob1xcXFxhZ2VuY2lhLWp0cC1zdHVkaW8tbWFpblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvam9hb3AvT25lRHJpdmUvJUMzJTgxcmVhJTIwZGUlMjBUcmFiYWxoby9hZ2VuY2lhLWp0cC1zdHVkaW8tbWFpbi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGNvbXBvbmVudFRhZ2dlciB9IGZyb20gXCJsb3ZhYmxlLXRhZ2dlclwiO1xuaW1wb3J0IFNpdGVtYXAgZnJvbSAndml0ZS1wbHVnaW4tc2l0ZW1hcCc7IC8vIDwtLS0gSW1wb3J0ZSBvIHBsdWdpblxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjo6XCIsXG4gICAgcG9ydDogODA4MCxcbiAgICBobXI6IHtcbiAgICAgIG92ZXJsYXk6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLCBcbiAgICBtb2RlID09PSBcImRldmVsb3BtZW50XCIgJiYgY29tcG9uZW50VGFnZ2VyKCksXG4gICAgLy8gQWRpY2lvbmUgYSBjb25maWd1cmFcdTAwRTdcdTAwRTNvIGRvIFNpdGVtYXAgYXF1aTpcbiAgICBTaXRlbWFwKHtcbiAgICAgIGhvc3RuYW1lOiAnaHR0cHM6Ly9zZXVzaXRlLmNvbS5icicsIC8vIFN1YnN0aXR1YSBwZWxhIHN1YSBVUkwgcmVhbFxuICAgICAgZHluYW1pY1JvdXRlczogW1xuICAgICAgICAnLycsXG4gICAgICAgICcvcG9ydGZvbGlvJyxcbiAgICAgICAgJy9wb2xpdGljYS1kZS1wcml2YWNpZGFkZScsXG4gICAgICAgICcvdGVybW9zLWRlLXVzbydcbiAgICAgIF0sXG4gICAgfSksXG4gIF0uZmlsdGVyKEJvb2xlYW4pLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG59KSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF1WSxTQUFTLG9CQUFvQjtBQUNwYSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBQ2hDLE9BQU8sYUFBYTtBQUpwQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUyxpQkFBaUIsZ0JBQWdCO0FBQUE7QUFBQSxJQUUxQyxRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUE7QUFBQSxNQUNWLGVBQWU7QUFBQSxRQUNiO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0gsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUNoQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K

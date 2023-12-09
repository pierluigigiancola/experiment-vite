import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import ImportMetaEnvPlugin from "@import-meta-env/unplugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ImportMetaEnvPlugin.rollup({
      example: ".env",
    }),
    svgr(),
    react(),
  ],
  build: {
    target: "es2022",
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import macrosPlugin from "vite-plugin-babel-macros";
macrosPlugin;
export default defineConfig({
  plugins: [macrosPlugin(), react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});

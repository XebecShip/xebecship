import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import pkg from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(), // Automatically handles all "@/" aliases from tsconfig
    dts({
      tsconfigPath: "./tsconfig.json",
      rollupTypes: true,
      include: ["src"]
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
      cssFileName: "style" // Native Vite 7 way to name the CSS file
    },
    minify: "terser",
    rollupOptions: {
      // Automatically externalize all dependencies listed in package.json
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
        /^lucide-react/ // Ensures sub-imports are externalized
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        assetFileNames: "[name][extname]"
      }
    }
  }
});

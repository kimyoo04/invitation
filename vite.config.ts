import path from "path";
import { defineConfig, loadEnv } from "vite";
import checker from "vite-plugin-checker";
import svgrPlugin from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      open: true,
      port: 3000,
    },
    preview: {
      open: true,
      port: 3000,
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          globals: {
            react: "React",
          },
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      "process.env": env,
    },
    plugins: [
      react(),
      checker({
        overlay: { initialIsOpen: false },
        typescript: true,
      }),
      tsconfigPaths({
        projects: [path.resolve(__dirname, "./tsconfig.json")],
      }),
      svgrPlugin(),
    ],
  };
});

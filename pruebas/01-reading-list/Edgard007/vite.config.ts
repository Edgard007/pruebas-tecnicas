import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@assets": "/src/assets",
      "@common": "/src/common",
      "@components": "/src/components",
      "@config": "/src/config",
      "@helpers": "/src/helpers",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
      "@store": "/src/store",
      "@actions": "/src/store/actions",
      "@interfaces": "/src/store/interfaces",
      "@reducers": "/src/store/reducers",
    },
  },
});

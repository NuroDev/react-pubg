import { defineConfig } from "vite";
import { join } from "path";
import React from "@vitejs/plugin-react";

export default defineConfig({
  envDir: join(process.cwd()),
  plugins: [React()],
});

import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
   test: {
       globals: true,
       reporters: ['default'],
       coverage: {
           provider: "v8",
           reporter: ["text", "json", "json-summary", "html"],
           include: ['src/**'],
           exclude: [
               '**/types/**',
               '**/constants/**',
           ],
           thresholds: {
               lines: 85,
               functions: 85,
               branches: 85,
               statements: 85,
           },
       },
   },
   resolve: {
    alias: {
        "@": path.resolve(__dirname, "./src"),
    },
  },
});
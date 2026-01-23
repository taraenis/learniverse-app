import path from 'path';
import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import vue from '@vitejs/plugin-vue';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    include: ['tests/**/*.spec.{ts,js}', 'src/**/*.spec.{ts,js}'],
    exclude: ['**/node_modules/**'],
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'json-summary', 'html'],
      include: ['src/**'],
      exclude: ['**/types/**', '**/constants/**'],
      thresholds: {
        lines: 85,
        functions: 85,
        branches: 85,
        statements: 85,
      },
    },
    projects: [
      {
        name: 'unit',
        extends: true,
      },
      {
        name: 'storybook',
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
            optimizeDeps: {
              include: ['axe-core', '@storybook/addon-interactions', '@storybook/test'],
            },
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
    },
  },
});

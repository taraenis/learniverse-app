import path from 'path';
import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';
import vue from '@vitejs/plugin-vue';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: [
      'vue',
      '@storybook/testing-library',
      '@storybook/addon-interactions',
      'axe-core',
      '@storybook/vue3',
    ],
  },
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
      /*{
        name: 'storybook',
        plugins: [
          vue(),
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          include: [],
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },*/
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
    },
  },
});

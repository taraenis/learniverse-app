import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import svgo from 'vite-plugin-svgo';

export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, './src/i18n/locales/**')],
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: false,
    }),
    svgo({
      plugins: [
        { name: 'removeViewBox', active: false },
        { name: 'removeEmptyAttrs' },
        { name: 'prefixIds' },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
    hmr: {
      clientPort: 5173,
    },
  },
});

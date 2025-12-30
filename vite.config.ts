import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  envDir: '.',
  publicDir: './public',
  server: {
    host: true,
  },
  build: {
    emptyOutDir: true,
    outDir: './dist',
    target: 'esnext',
    sourcemap: true,
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools({
      launchEditor: 'webstorm',
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/_vars.scss" as *; @use "@/styles/_mixins.scss" as *;`,
      },
    },
  },
});

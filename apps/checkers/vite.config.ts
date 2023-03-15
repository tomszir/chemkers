import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { comlink } from 'vite-plugin-comlink';

// Custom plugin to replace vite environment variables with built asset names, so they can be
// loaded within a web-worker
import replaceEnv from './plugins/vite-plugin-replace-env';

export default defineConfig({
  base: '',
  plugins: [preact(), comlink(), replaceEnv()],
  worker: {
    plugins: [comlink()],
  },
});

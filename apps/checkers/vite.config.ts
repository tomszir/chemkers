import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { comlink } from 'vite-plugin-comlink';
import wasm from 'vite-plugin-wasm'; // TODO: Remove

export default defineConfig({
  plugins: [preact(), comlink()],
  worker: {
    plugins: [comlink()],
  },
});

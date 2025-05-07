import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import postcssPxToRem from 'postcss-pxtorem';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssPxToRem({
          rootValue: 37.5,
          unitPrecision: 5,
          propList: ['*'],
        }),
      ],
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@base-font-size': 37.5,
        },
      },
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import postcssPxToRem from 'postcss-pxtorem';
// import vitePluginImport from 'vite-plugin-importer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // vitePluginImport({
    //   libraryName: '@arco-design/mobile-react',
    //   libraryDirectory: 'esm',
    //   style: path => `${path}/style`,
    // }),
    // vitePluginImport({
    //   libraryName: '@arco-design/mobile-react/esm/icon',
    //   libraryDirectory: '',
    //   camel2DashComponentName: false,
    // }),
  ],
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

import {fileURLToPath, URL} from 'node:url';
import path from 'path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/hostapi': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/hostapi/, ''),
      },
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/img', import.meta.url)),
      '@interface': fileURLToPath(new URL('./src/api/interface', import.meta.url)),
      '@header': fileURLToPath(new URL('./src/components/container/header', import.meta.url)),
      '@diary': fileURLToPath(new URL('./src/components/container/diary', import.meta.url)),
      '@blog': fileURLToPath(new URL('./src/components/container/blog', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve(__dirname, 'src/assets/css/index.less')}";`, // src/css/common.less 是你需要全局变量 （你定义的定义的方法 和 变量等）
        },
        javascriptEnabled: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        // 最小化拆分包
        // manualChunks: (id) => {
        //   if (id.includes('node_modules')) {
        //     return id.toString().split('node_modules/')[1].split('/')[0].toString();
        //   }
        // }, // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: 'js/[name].[hash].js', // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: 'js/[name].[hash].js', // 用于输出静态资源的命名，[ext]表示文件扩展名
        // assetFileNames: '[ext]/[name].[hash].[ext]', // 拆分js到模块文件夹 // chunkFileNames: (chunkInfo) => { //     const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/') : []; //     const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]'; //     return `js/${fileName}/[name].[hash].js`; // },
      },
    },
    // 防止转化rgba
    cssTarget: 'chrome61',
    // 是否生成map
    sourcemap: true,
  },
});

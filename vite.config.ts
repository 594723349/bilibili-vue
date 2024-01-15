import { resolve } from "path";
import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import { wrapperEnv } from "./build/getEnv";

import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import autoprefixer from 'autoprefixer'
import viteCompression from 'vite-plugin-compression'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {

  //获取当前项目路径
  const root = process.cwd();
  //获取当前环境变量
  const env = loadEnv(mode, root);
  //获取当前环境变量的具体键值对配置
  const viteEnv = wrapperEnv(env);
  //代理配置
  const proxy=viteEnv.VITE_PROXY

  return {
    plugins:
      [
        vue(),
        legacy({
          targets: ['defaults', 'not IE 11'],
          additionalLegacyPolyfills: ['regenerator-runtime/runtime']
        }),
        viteCompression(),
        AutoImport({
          resolvers: [ElementPlusResolver()],
        }),
        Components({
          resolvers: [ElementPlusResolver()],
        }),
        viteMockServe({
          mockPath: "./src/mock/index.ts"
        })
      ],
    // 指定项目的根目录
    root: './',
    base: viteEnv.VITE_PUBLIC_PATH, 
    // 编译模式
    mode: 'development',
    // 解析模块的路径
    resolve: {
      // 别名配置
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    // CSS的相关配置
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
          })
        ]
      },
      // CSS预处理器配置
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/sass/index.scss";'
        }
      }
    },
    server: {
      // 设置服务器开启的端口号
      port: 3000,
      // 是否自动打开浏览器
      open: true,
      // 是否开启 hmr 热更新
      hmr: true,
      // 服务器代理配置
      proxy: proxy
    },
    // 构建相关配置
    build: {
      // 是否开启sourcemap
      sourcemap: true,
      // 是否压缩代码
      minify: true,
      // 是否生成manifest.json文件
      manifest: true,
      // 是否将CSS提取成一个单独的文件
      cssCodeSplit: true
    },
    optimizeDeps: {
      include: [],
    }
  }
}

)

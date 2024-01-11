import legacy from '@vitejs/plugin-legacy'
import autoprefixer from 'autoprefixer'
import viteCompression from 'vite-plugin-compression'

export default {
  // 入口文件的路径
  input: 'src/main.js',
  // 指定项目的根目录
  root: './',
  // 指定输出目录
  outDir: 'dist',
  // 输出文件的路径和名称
  output: {
    file: 'dist/bundle.js'
  },
  // 是否生成 source map
  sourcemap: true,
  // 是否开启 SSR
  ssr: false,
  // 静态资源的路径
  base: '/public/',
  // 编译模式
  mode: 'development',
  // 调试相关配置
  server: {
    // 设置服务器开启的端口号
    port: 3000,
    // 是否自动打开浏览器
    open: true,
    // 是否开启 https
    https: false,
    // 是否开启 hmr 热更新
    hmr: true,
    // 是否在控制台显示警告信息
    progress: true,
    // 服务器代理配置
    proxy: {
      '/api': 'http://localhost:3000'
    },
    // 是否开启服务器响应 gzip 压缩
    gzip: true
    // 其他服务器选项，例如 proxy、cors 等
    // 详见 https://cn.vitejs.dev/config/#server-options
  },
  // 解析模块的路径
  resolve: {
    // 别名配置
    alias: {
      '@': '/src'
    }
  },
  // CSS的相关配置
  css: {
    // 是否将CSS提取成一个单独的文件
    extract: true,
    // CSS预处理器配置
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variables.scss";'
      }
    }
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
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    viteCompression(),
    autoprefixer({
      overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
    })
  ]
  // 其他配置项
  // 详见 https://cn.vitejs.dev/config/
}

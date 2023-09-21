import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    // 配置别名
    alias: {
      '@': '/src' // @表示src目录
    }
  },
  server: {
    host: '0.0.0.0',
    port: 4000, //设置服务启动端口号，是一个可选项，不要设置为本机的端口号，可能会发生冲突
    open: true, //是否自动打开浏览器，可选项
    cors: true, //允许跨域。
    // 设置代理
    proxy: {
      // 将请求代理到另一个服务器
      //   '/api': {
      //     target: 'http://rap2api.taobao.org/app/mock/314059/api', //这是你要跨域请求的地址前缀
      //     changeOrigin: true, //开启跨域
      //     rewrite: path => path.replace(/^\/api/, '') //去除前缀api
      //   },
      '/api': {
        target: 'http://localhost:8001/api', //这是你要跨域请求的地址前缀
        changeOrigin: true, //开启跨域
        rewrite: path => path.replace(/^\/api/, '') //去除前缀api
      }
    }
  }
})

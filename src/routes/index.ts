import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
const router = createRouter({
  history: createWebHistory(), //history模式
  routes
})

// export default route 将路由导出的写法

// 封装路由方法，传入app
export const initRouter = app => {
  app.use(router)
}

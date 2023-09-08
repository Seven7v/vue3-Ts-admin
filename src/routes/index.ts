import { createRouter, createWebHistory } from 'vue-router'
import { App } from 'vue'
import routes from './routes'
const router = createRouter({
  history: createWebHistory(), //history模式
  routes
})

const isAuthenticated = localStorage.getItem('token')
router.beforeEach((to, from, next) => {
  if (
    // 检查用户是否已登录
    !isAuthenticated &&
    // ❗️ 避免无限重定向
    to.name !== 'login'
  ) {
    // 将用户重定向到登录页面
    return { name: 'login' }
  } else {
    next()
  }
})
// export default route 将路由导出的写法

// 封装路由方法，传入app <Element> 代表页面内的标签元素
export const initRouter = (app: App<Element>) => {
  app.use(router)
}

import { RouteRecordRaw } from 'vue-router'
const Login = () => import('../pages/login/index.vue')
const Homepage = () => import('../pages/homePage/index.vue')
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/home',
    component: Homepage,
    name: 'home'
  }
]
export default routes

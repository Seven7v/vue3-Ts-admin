import { RouteRecordRaw } from 'vue-router'
const Layout = () => import('../layout/index.vue')
const Login = () => import('../pages/login/index.vue')
const Homepage = () => import('../pages/homePage/index.vue')
const Chart = () => import('../pages/chart/index.vue')
const routes: RouteRecordRaw[] = [
  {
    path: '/admin',
    component: Layout,
    name: 'admin',
    children: [
      {
        path: '/home',
        component: Homepage,
        name: 'home'
      },
      {
        path: '/chart',
        component: Chart,
        name: 'chart'
      }
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  }
]
export default routes

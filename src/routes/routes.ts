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
    meta: {
      icon: 'HomeFilled',
      isNav: true
    },
    children: [
      {
        path: '/admin/home',
        component: Homepage,
        name: 'home',
        meta: {
          isNav: true
        }
      }
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/',
    redirect: '/admin/home'
  }
]

const asyncRouter: RouteRecordRaw[] = [
  {
    path: '/statistics',
    component: Layout,
    name: 'statistics',
    meta: {
      icon: 'PieChart',
      isNav: true
    },
    children: [
      {
        path: '/statistics/chart',
        component: Chart,
        name: 'chart',
        meta: {
          isNav: true
        }
      }
    ]
  },
  {
    path: '/document',
    component: Layout,
    name: 'document',
    meta: {
      isNav: true,
      icon: 'PieChart'
    },
    children: [
      {
        path: '/document/setting',
        component: Homepage,
        name: 'setting',
        meta: {
          isNav: true
        }
      },
      {
        path: '/document/preview',
        component: Chart,
        name: 'preview',
        meta: {
          isNav: true
        }
      }
    ]
  }
]
const CurrentRoute: RouteRecordRaw[] = routes.concat(...asyncRouter)
console.log(CurrentRoute)
export default CurrentRoute

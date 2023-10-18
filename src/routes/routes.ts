import { RouteRecordRaw } from 'vue-router'
const Layout = () => import('../layout/index.vue')
const Login = () => import('../pages/login/index.vue')
const Homepage = () => import('../pages/homePage/index.vue')
const Chart = () => import('../pages/chart/index.vue')
const DocumentSetting = () => import('../pages/document/setting.vue')
const DocumentPreview = () => import('../pages/document/preview.vue')
const UserConsole = () => import('../pages/console/userConsole.vue')
const PermissionConsole = () => import('../pages/console/permissionConsole.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/admin',
    component: Layout,
    name: 'admin',
    meta: {
      icon: 'Menu',
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
      isNav: true,
      role: ['admin', 'editor', 'normal']
    },
    children: [
      {
        path: '/statistics/chart',
        component: Chart,
        name: 'chart',
        meta: {
          isNav: true,
          role: ['admin', 'editor', 'normal']
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
      icon: 'Document'
    },
    children: [
      {
        path: '/document/setting',
        component: DocumentSetting,
        name: 'setting',
        meta: {
          isNav: true,
          role: ['admin', 'editor', 'normal']
        }
      },
      {
        path: '/document/table',
        component: DocumentPreview,
        name: 'table',
        meta: {
          isNav: true,
          role: ['admin', 'editor', 'normal']
        }
      }
    ]
  },
  {
    path: '/console',
    component: Layout,
    name: 'console',
    meta: {
      isNav: true,
      icon: 'HelpFilled'
    },
    children: [
      {
        path: '/console/user',
        component: UserConsole,
        name: 'userConsole',
        meta: {
          isNav: true,
          // 暂未设置用户权限
          role: ['admin', 'editor']
        }
      },
      {
        path: '/console/permission',
        component: PermissionConsole,
        name: 'permissionConsole',
        meta: {
          isNav: true,
          role: ['admin']
        }
      }
    ]
  }
]
const CurrentRoute: RouteRecordRaw[] = routes.concat(...asyncRouter)
console.log(CurrentRoute)
export default CurrentRoute

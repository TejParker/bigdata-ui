import DefaultLayout from '@/views/layouts/DefaultLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'
import BlankLayout from '@/views/layouts/BlankLayout.vue'
import { isLogin } from '@/utils/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: 'space/apps',
          name: 'space-apps-list',
          component: () => import('@/views/space/apps/ListView.vue'),
        },
      ],
    },
    {
      path: '/',
      component: BlankLayout,
      children: [
        {
          path: 'auth/login',
          name: 'auth-login',
          component: () => import('@/views/auth/LoginView.vue'),
        },
      ],
    },
    /*{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ],
})

// todo: 路由守卫实现
router.beforeEach(async (to, from) => {
  if (!isLogin() && to.name != 'auth-login') {
    return { path: '/auth/login' }
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import CreateSurveyView from '../views/CreateSurveyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/survey',
      name: 'CreateSurvey',
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem('token')) {
          next('/login')
        } else {
          next()
        }
      },
      component: CreateSurveyView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router

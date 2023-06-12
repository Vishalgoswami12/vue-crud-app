import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardView from "../views/Card/CardView.vue"
import CardCreate from "../views/Card/CardCreate.vue"
import CardEdit from "../views/Card/CardEdit.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
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
    },
    {
      path:"/card",
      name:"card",
      component:CardView
    },
    {
      path:"/card/create",
      name:"cardcreate",
      component:CardCreate
    },
    {
      path:`/card/:id/edit`,
      name:"cardedit",
      component:CardEdit
    },
  ]
})

export default router

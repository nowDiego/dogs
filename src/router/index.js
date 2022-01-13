import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Favorite from '../views/Favorite.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  },
  {
    path: "/:catchAll(.*)",
    component: Home,
  },

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddCard from '../views/AddCard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addcard',
    name: 'AddCard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AddCard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

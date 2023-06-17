import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/AboutView.vue"
import BuscaCepView from "../views/BuscaCepView.vue"

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: "/cep",
    name: "BuscaCepView",
    component: BuscaCepView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

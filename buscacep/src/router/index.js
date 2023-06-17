import { createRouter, createWebHashHistory } from 'vue-router'
import BuscaCepView from "../views/BuscaCepView.vue"

const routes = [
  {
    path: '/',
    name: "BuscaCepView",
    component: BuscaCepView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

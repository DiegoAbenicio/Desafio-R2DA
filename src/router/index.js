import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/CadastroView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props: true,
  },
  {
    path: '/registrado',
    name: 'registrado',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistradoView.vue'),
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

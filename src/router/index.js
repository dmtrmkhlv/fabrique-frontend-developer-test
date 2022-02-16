import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/Users.vue'
import Quiz from '../views/Quiz.vue'
import Callcenter from '../views/Callcenter.vue'
import Blacklist from '../views/Blacklist.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  },
  {
    path: '/callcenter',
    name: 'Callcenter',
    component: Callcenter
  },
  {
    path: '/blacklist',
    name: 'Blacklist',
    component: Blacklist
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

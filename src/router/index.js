import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/Users.vue'
import Quiz from '../views/Quiz.vue'
import CallCenter from '../views/CallCenter.vue'
import BlackList from '../views/BlackList.vue'

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
    name: 'CallCenter',
    component: CallCenter
  },
  {
    path: '/blacklist',
    name: 'BlackList',
    component: BlackList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

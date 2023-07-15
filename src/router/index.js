import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/books',
    name: 'books',
    component: () => import(/* webpackChunkName: "about" */ '../views/Books.vue')
  },
  {
    path: '/books/:id',
    name: 'bookEdit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bookedit.vue')
  },
  {
    path: '/authors',
    name: 'authors',
    component: () => import(/* webpackChunkName: "about" */ '../views/Author.vue')
  },
  {
    path: '/authors/:id',
    name: 'authorEdit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Authoredit.vue')
  },
  {
    path: '/members',
    name: 'members',
    component: () => import(/* webpackChunkName: "about" */ '../views/Members.vue')
  },
  {
    path: '/members/:id',
    name: 'memberEdit',
    component: () => import(/* webpackChunkName: "about" */ '../views/Memberedit.vue')
  },
  {
    path: '/employees',
    name: 'employees',
    component: () => import(/* webpackChunkName: "about" */ '../views/Employees.vue')
  },
  {
    path: '/employees/:id',
    name: 'employeesEdit',
    component: () => import(/* webpackChunkName: "about" */ '../views/EmployeeEdit.vue')
  },
  {
    path: '/issued',
    name: 'issued',
    component: () => import(/* webpackChunkName: "about" */ '../views/IssuedBooks.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

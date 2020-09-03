import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../views/HomePage'
import AboutPage from '../views/aboutpage'
import ProductsPage from '../views/productspage'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: "HomePage",
    component: HomePage
  },
  {
    path: '/about',
    name: "AboutPage",
    component: AboutPage
  },
  {
    path: '/products',
    name: "productspage",
    component: ProductsPage 
  },

  ],
})

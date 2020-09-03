import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../views/homepage'
import AboutPage from '../views/aboutpage'
import productspage from '../views/productspage'



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
    component: productspage
  },

  ],
})

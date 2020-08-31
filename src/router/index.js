import Vue from 'vue'
import Router from 'vue-router'

import homepage from '../views/homepage'
import aboutpage from '../views/aboutpage'
import productspage from '../views/productspage'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: "homepage",
    component: homepage
  },
  {
    path: '/about',
    name: "aboutpage",
    component: aboutpage
  },
  {
    path: '/products',
    name: "productspage",
    component: productspage
  },

  ],
})

import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/components/common/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexPage,
    }
  ]
})

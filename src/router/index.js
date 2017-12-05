import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/components/common/IndexPage.vue'
import Index from '@/components/common/Index.vue'

import Login from '@/components/login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage,
      children:[
        //1、Default router
        {   path:'',  name:'Index',  component:Index  }
      ]
    },
    //2、Login page
    {   path:'/login',  name:'Login',   component:Login   }
  ]
})

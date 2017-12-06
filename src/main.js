// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'

import "@/assets/css/common.css"
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.use(Vuex);

/* i18n */
Vue.use(VueI18n);
import EN from '@/assets/json/i18n/en-us.json'
import CN from '@/assets/json/i18n/zh-cn.json'
const i18n = new VueI18n({locale: 'EN',messages: {CN: CN,EN: EN}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})

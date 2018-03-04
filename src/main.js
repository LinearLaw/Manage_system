// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import axios from "axios"

import "./assets/css/font-awesome-4.7.0/css/font-awesome.min.css"

import "./assets/css/common.css"
import 'element-ui/lib/theme-chalk/index.css'
//Load config file
import _global from './assets/json/config/utils.js'
import _config from './assets/json/config/config.js'

Vue.use(ElementUI);
Vue.use(Vuex);

/* i18n */
Vue.use(VueI18n);
import EN from './assets/json/lang/en-us.json'
import CN from './assets/json/lang/zh-cn.json'
const i18n = new VueI18n({locale: 'CN',messages: {CN: CN,EN: EN}})

Vue.config.productionTip = false;
Vue.prototype.GLOBAL = _global;
Vue.prototype.CONFIG = _config;

//axios的请求拦截器
// axios.interceptors.request.use(function (config) {    // 这里的config包含每次请求的内容
//     // config.defaults.withCredentials = false;
//     return config
// }, function (err) {
//     return Promise.reject(err);
// });
//axios的响应拦截器，在这里定义路由守卫规则
// axios.interceptors.response.use(function (config) {    
//     // config.defaults.withCredentials = false;
//     return config
// }, function (err) {
//     return Promise.reject(err);
// });

Vue.prototype.$http = axios

router.beforeEach((to, from, next) => {
  // if(!to.meta.auth){
        // 对路由进行验证
        // console.log(_global.cookie.get('SID'));
        // if(_global.cookie.get('SID')) { // 已经登陆
            // next();     // 正常跳转到你设置好的页面
        // }else{
        //     next({"name":"Login"});
		    // }
	// } else{
    next()
  // }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})

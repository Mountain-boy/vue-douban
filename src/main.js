// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import BScroll from 'better-scroll'

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: '@/assets/lazy/lazyLoad.gif'
})

Vue.config.productionTip = false


//引入需要的css，js文件
import '@/assets/css/reset.css'
import '@/assets/css/index.css'
import '@/assets/css/bookvedio.css'
import '@/assets/css/moviedetail.css'
import '@/assets/js/rem.js'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

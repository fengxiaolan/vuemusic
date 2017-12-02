// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//轮播图swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'; //swiper
Vue.use(VueAwesomeSwiper);
import VueResource from 'vue-resource'; //swiper
Vue.use(VueResource);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

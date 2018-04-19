
import Vue from 'vue'
import weex from 'weex-vue-render'
import router from '@/router/index.js'



var vm = new Vue(Vue.util.extend(
  {
    el: '#root',
    router
  }, App))
  weex.init(Vue)
  

const App = require('..\\src\\app.vue');
new Vue(Vue.util.extend({el: '#root'}, App));

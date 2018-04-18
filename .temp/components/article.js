
import Vue from 'vue'
import weex from 'weex-vue-render'
weex.init(Vue)
  

const App = require('..\\..\\src\\components\\article.vue');

const router = require('..\src\router\router.js');
new Vue(Vue.util.extend({el: '#root', router}, App));

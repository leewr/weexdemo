import Router from 'vue-router'
import Vue from 'vue'
import home from '@/index.vue'
import article from '@/article.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      components: home
    },
    {
      name: 'article',
      path: '/article:id',
      components: article
    }
  ]
})

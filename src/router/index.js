import Vue from 'vue';
import Router from 'vue-router';
import List from '@/components/List';
import PostDetail from '@/components/PostDetail';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/detail/:postNo',
      name: 'PostDetail',
      component: PostDetail,
      props: true
    }
  ]
})

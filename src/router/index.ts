import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

import TopStories from '../views/TopStories.vue';
import Share from '../views/Share.vue';
import FireWall from '../views/Firewall.vue';
import Faq from '../views/Faq.vue';

Vue.use(Router);

class RouteMeta {
  title: string;
  search: boolean = false;

  constructor({title}: { title: string }) {
    this.title = title;     
  }
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top-stories',
      component: TopStories,
      meta: new RouteMeta({ title: '新闻' })
    },
    {
      path: '/share',
      name: 'share',
      component: Share,
      meta: new RouteMeta({ title: '分享' })
    },
    {
      path: '/firewall',
      name: 'firewall',
      component: FireWall,
      meta: new RouteMeta({ title: '翻墙测试' })
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq,
      meta: new RouteMeta({ title: '常见问题' })
    }
  ]
});

// This callback runs before every route change, including on initial load
router.beforeEach((to, from, next) => {

  const routeMeta = to.meta as RouteMeta;
  store.dispatch('topToolbar/changeTitle', routeMeta.title);
  store.dispatch('topToolbar/changeSearch', "");
  next();
});

export default router;
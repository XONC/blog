import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/components/container/IndexView.vue';
import NotFound from '@/components/container/NotFound.vue';
import {blog} from './blog';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    ...blog,
    // {
    //   path: '/diary',
    //   name: 'diary',
    //   component: () => import('@diary/IndexView.vue'),
    // },
    /* 404 页面 */
    {path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound},
  ],
});

router.beforeEach((to, form, next) => {
  const title = (to.meta?.title || import.meta.env.VITE_SITE_NAME) as string;
  document.title = title;
  next();
});

export default router;

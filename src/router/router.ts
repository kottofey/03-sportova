import { createRouter, createWebHistory } from 'vue-router';

import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'router-link-active',
  routes,
});

export default router;

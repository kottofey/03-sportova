import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home.view',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/actions',
    name: 'actions.view',
    component: () => import('@/views/ActionsView.vue'),
  },
  {
    path: '/how-to-order',
    name: 'how-to-order.view',
    component: () => import('@/views/HowToOrderView.vue'),
  },
  {
    path: '/about',
    name: 'about.view',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/delivery',
    name: 'delivery.view',
    component: () => import('@/views/DeliveryView.vue'),
  },
  {
    path: '/guarantees',
    name: 'guarantees.view',
    component: () => import('@/views/GuaranteesView.vue'),
  },
  {
    path: '/contacts',
    name: 'contacts.view',
    component: () => import('@/views/ContactsView.vue'),
  },
  {
    path: '/constructor',
    name: 'constructor.view',
    component: () => import('@/views/ConstructorView.vue'),
  },
];

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductView from '../views/ProductView.vue';
import ProductCreateView from '../views/ProductCreateView.vue';
import ProductUpdateView from '../views/ProductUpdateView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:id',
      name: 'productView',
      component: ProductView,
    },
    {
      path: '/product/create',
      name: 'productCreate',
      component: ProductCreateView,
    },
    {
      path: '/product/:id/update',
      name: 'productUpdate',
      component: ProductUpdateView,
    },
  ],
});

export default router;

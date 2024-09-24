import Vue from 'vue';
import VueRouter from 'vue-router';
import Products from '../views/Products.vue';
import Cart from '../views/Cart.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;

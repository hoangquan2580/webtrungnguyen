import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ProductPage from '../views/ProductPage.vue';
import ProductDetail from '../views/ProductDetail.vue';
import PromotionPage from '../views/PromotionPage.vue';
import CustomerPage from '../views/CustomerPage.vue';
import LifestylePage from '../views/LifestylePage.vue';
import RecruitmentPage from '../views/RecruitmentPage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import CartPage from '../views/CartPage.vue';
import CheckoutPage from '../views/CheckoutPage.vue';
import AdminPage from '../views/AdminPage.vue';
import AdminProducts from '@/components/admin/AdminProducts.vue';
import AdminUser from '@/components/admin/AdminUser.vue';
import AdminOrders from '@/components/admin/AdminOrders.vue';
import AdminStatistics from '@/components/admin/AdminStatistics.vue';

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: HomePage 
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/product',
    name: 'product',
    component: ProductPage
  },
  {
    path: '/productdetail/:id',
    name: 'productdetail',
    component: ProductDetail
  },
  {
    path: '/promotion',
    name: 'promotion',
    component: PromotionPage
  },
  {
    path: '/customer',
    name: 'customer',
    component: CustomerPage
  },
  {
    path: '/lifestyle',
    name: 'lifestyle',
    component: LifestylePage
  },
  {
    path: '/recruitment',
    name: 'recruitment',
    component: RecruitmentPage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutPage,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPage,
    children: [
      {
        path: 'products',
        component: AdminProducts
      },
      {
        path: 'users',
        component: AdminUser
      },
      {
        path: 'orders',
        component: AdminOrders
      },
      {
        path: 'statistics',
        component: AdminStatistics
      },
    ]
  },
    
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
  
export default router;
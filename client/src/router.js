import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/dumb/HomePage.vue";
import FAQPage from "./pages/dumb/FAQPage.vue";
import GalleryPage from "./pages/smart/GalleryPage.vue";
import ContactPage from "./pages/smart/ContactPage.vue";
import QuotePage from "./pages/smart/QuotePage.vue";
import ForSalePage from "./pages/smart/ForSalePage.vue";
import AdminLogin from "./pages/admin/AdminLogin.vue";
import MessageCenter from "./pages/admin/MessageCenter.vue";
import NotFound from "./pages/dumb/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', component: HomePage },
    { name: 'faq', path: '/faq', component: FAQPage },
    { name: 'gallery', path: '/gallery', component: GalleryPage },
    { name: 'contact', path: '/contact', component: ContactPage },
    { name: 'quote', path: '/request-quote', component: QuotePage },
    { name: 'for-sale', path: '/for-sale', component: ForSalePage },
    { name: 'admin', path: '/admin', component: AdminLogin },
    {
      name: 'message-center',
      // meta: { needsAuth: true },
      path: '/message-center',
      component: MessageCenter,
    },
    { name: '404', path: '/:notfound(.*)', component: NotFound },
  ],
});

export default router;

import AboutPage from '@/pages/AboutPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import DrawingCreatePage from '@/pages/DrawingCreatePage.vue'
import DrawingEditPage from '@/pages/DrawingEditPage.vue'
import DrawingPage from '@/pages/DrawingPage.vue'
import GalleryPage from '@/pages/GalleryPage.vue'
import HomePage from '@/pages/HomePage.vue'
import MyDrawingsPage from '@/pages/MyDrawingsPage.vue'
import SchedulePage from '@/pages/SchedulePage.vue'
import UserLoginPage from '@/pages/UserLoginPage.vue'
import UserRegistrationPage from '@/pages/UserRegistrationPage.vue'
import { useUserStore } from '@/stores/useUserStore'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage,
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: SchedulePage,
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: GalleryPage,
    },
    {
      path: '/drawing/:imageId',
      name: 'DrawingPage',
      component: DrawingPage,
      props: true,
    },
    {
      path: '/login',
      name: 'Login',
      component: UserLoginPage,
      meta: { requiresGuest: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: UserRegistrationPage,
      meta: { requiresGuest: true }
    },
    {
      path: '/mine',
      name: 'MyDrawings',
      component: MyDrawingsPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/drawing/create',
      name: 'DrawingCreate',
      component: DrawingCreatePage,
      meta: { requiresAuth: true }
    },
    {
      path: '/drawing/:imageId/edit',
      name: 'DrawingEdit',
      component: DrawingEditPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: ContactPage
    }
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !userStore.isUserLogged) {
    // Redirect to login if not authenticated
    return next({ name: 'Login' });
  }

  if (to.meta.requiresGuest && userStore.isUserLogged) {
    // Redirect to home if already authenticated
    return next({ name: 'Home' });
  }

  // Allow navigation
  next();
});

export default router;

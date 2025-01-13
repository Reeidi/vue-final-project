import AboutPage from '@/pages/AboutPage.vue'
import DrawingPage from '@/pages/DrawingPage.vue'
import GalleryPage from '@/pages/GalleryPage.vue'
import HomePage from '@/pages/HomePage.vue'
import MyDrawingsPage from '@/pages/MyDrawingsPage.vue'
import SchedulePage from '@/pages/SchedulePage.vue'
import UserLoginPage from '@/pages/UserLoginPage.vue'
import UserRegistrationPage from '@/pages/UserRegistrationPage.vue'
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
    },
    {
      path: '/mine',
      name: 'MyDrawings',
      component: MyDrawingsPage
    },
    {
      path: '/register',
      name: 'Register',
      component: UserRegistrationPage
    }
  ],
});

export default router;

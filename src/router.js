import { createWebHistory, createRouter } from "vue-router";

import Signup from "./components/Signup.vue";
import Login from "./components/Login.vue";
import LogoutLink from "./components/LogoutLink.vue";
import PhotosIndex from "./components/PhotosIndex.vue";
import PhotosNew from "./components/PhotosNew.vue";

const routes = [
  { path: "/signup", component: Signup },
  { path: "/login", component: Login },
  { path: "/logout", component: LogoutLink },
  { path: "/photos", component: PhotosIndex },
  { path: "/photos/new", component: PhotosNew },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
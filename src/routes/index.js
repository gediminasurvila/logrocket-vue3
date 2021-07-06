export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/jokes",
    name: "jokes",
    component: () => import("@/views/Joke.vue"),
  },
  {
    path: "/counter",
    name: "counter",
    component: () => import("@/views/Counter.vue"),
  },
];

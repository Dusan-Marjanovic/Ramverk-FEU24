import { createRouter, createWebHistory } from "vue-router";
import DeckMain from "../pages/DeckMain.vue";
import CardMain from "../pages/CardMain.vue";

const routes = [
  {
    path: "/",
    name: "DeckMain",
    component: DeckMain,
  },
  {
    path: "/:cardName",
    name: "CardMain",
    component: CardMain,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

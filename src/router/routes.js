import HomeView from "@/views/HomeView.vue";
import QuizView from "@/views/QuizView.vue";
import ResultView from "@/views/ResultView.vue";

export const routes = [
  { path: '/', component: HomeView },
  { path: '/quiz/:id', component: QuizView},
  { path: '/result', component: ResultView},
];

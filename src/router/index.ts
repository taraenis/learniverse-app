import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import SetupView from '../views/SetupView.vue';
import AssessmentView from '../views/AssessmentView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Setup',
    component: SetupView,
  },
  {
    path: '/assessment',
    name: 'Assessment',
    component: AssessmentView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

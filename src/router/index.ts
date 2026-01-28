import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteRecordRaw,
} from 'vue-router';
import SetupView from '@/views/SetupView.vue';
import AssessmentView from '@/views/AssessmentView.vue';
import { useSetupStore } from '@/stores/setup.store';

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
    beforeEnter: (to, from, next: NavigationGuardNext) => {
      const setupStore = useSetupStore();

      if (!setupStore.jobURL) {
        return next({ name: 'Setup' });
      }

      next();
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

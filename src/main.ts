import '@/assets/styles/app.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { i18n } from '@/i18n';
import { router } from '@/router';
import App from '@/App.vue';
import { useLanguage } from '@/composables/useLanguage';
import FontAwesomeIcon from '@/plugins/fontawesome';

async function bootstrap() {
  const app = createApp(App);
  const pinia = createPinia();

  app.use(pinia);
  app.use(i18n);
  app.use(router);

  app.component('font-awesome-icon', FontAwesomeIcon);

  const { currentLang, setLanguage } = useLanguage();
  await setLanguage(currentLang.value);

  app.mount('#app');
}

bootstrap();

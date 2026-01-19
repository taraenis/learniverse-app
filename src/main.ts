import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { i18n } from '@/i18n';
import { router } from '@/router';
import '@/assets/styles/app.scss';
import App from '@/App.vue';
import { useLanguage } from './composables/useLanguage';

const app = createApp(App);

const { currentLang, setLanguage } = useLanguage();
setLanguage(currentLang.value);

app.use(i18n);
app.use(router);
app.use(createPinia());
app.mount('#app');

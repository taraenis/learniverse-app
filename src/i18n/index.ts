import { createI18n } from 'vue-i18n';
import { nextTick } from 'vue';
import { DEFAULT_LOCALE } from '@/constants';
import type { SupportedLocales } from '@/types/language.type';

export const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: 'de',
  messages: {},
});

async function loadLocaleMessages(locale: SupportedLocales) {
  if (i18n.global.availableLocales.includes(locale)) return;

  const messages = await import(`./locales/${locale}.json`);
  i18n.global.setLocaleMessage(locale, messages.default);
}

export async function setLocale(locale: SupportedLocales) {
  await loadLocaleMessages(locale);
  i18n.global.locale.value = locale;
  return nextTick();
}

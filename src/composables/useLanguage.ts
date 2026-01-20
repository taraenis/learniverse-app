import { ref, computed, readonly, type DeepReadonly, type ComputedRef } from 'vue';
import { SUPPORTED_LANGS } from '@/constants';
import { setLocale } from '@/i18n';

export type Language = (typeof SUPPORTED_LANGS)[number];

const currentLang = ref<Language>((localStorage.getItem('user-lang') as Language) || 'en');

interface LanguageComposable {
  currentLang: DeepReadonly<typeof currentLang>;
  setLanguage: (lang: Language) => void;
  isGerman: ComputedRef<boolean>;
  isEnglish: ComputedRef<boolean>;
  supportedLanguages: readonly Language[];
}

export function useLanguage(): LanguageComposable {
  const setLanguage = async (lang: Language): Promise<void> => {
    if (SUPPORTED_LANGS.includes(lang)) {
      currentLang.value = lang;
      await setLocale(lang);
      localStorage.setItem('user-lang', lang);
      document.documentElement.setAttribute('lang', lang);
    }
  };

  const isGerman = computed(() => currentLang.value === 'de');
  const isEnglish = computed(() => currentLang.value === 'en');

  return {
    currentLang: readonly(currentLang),
    setLanguage,
    isGerman,
    isEnglish,
    supportedLanguages: SUPPORTED_LANGS,
  };
}

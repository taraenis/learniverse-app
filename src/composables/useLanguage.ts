import { ref, computed, readonly, type DeepReadonly, type ComputedRef } from 'vue';
import { DEFAULT_LOCALE, SUPPORTED_LANGS } from '@/constants';
import { setLocale } from '@/i18n';
import type { Language } from '@/types/language.type';
import { setLanguageHTMLAttributes } from '@/utils/helpers';

const currentLang = ref<Language>(
  (localStorage.getItem('user-lang') as Language) ?? DEFAULT_LOCALE,
);

interface LanguageComposable {
  currentLang: DeepReadonly<typeof currentLang>;
  setLanguage: (lang: Language) => void;
  isGerman: ComputedRef<boolean>;
  isEnglish: ComputedRef<boolean>;
  supportedLanguages: readonly Language[];
}

export function useLanguage(): LanguageComposable {
  const setLanguage = async (lang: Language): Promise<void> => {
    if (!SUPPORTED_LANGS.includes(lang)) {
      return;
    }

    await setLocale(lang);
    currentLang.value = lang;
    setLanguageHTMLAttributes(lang);
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

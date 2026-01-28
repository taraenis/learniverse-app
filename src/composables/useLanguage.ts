import { ref, computed, readonly, type DeepReadonly, type ComputedRef } from 'vue';
import { DEFAULT_LOCALE } from '@/constants';
import { setLocale } from '@/i18n';
import type { Language } from '@/types/language.type';
import { isLanguageSupported, setLanguageHTMLAttributes } from '@/utils/helpers';
import { SUPPORTED_LANGUAGES } from '@/language';

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
    if (!isLanguageSupported(lang)) return;

    await setLocale(lang);
    setLanguageHTMLAttributes(lang);

    currentLang.value = lang;
  };

  const isGerman = computed(() => currentLang.value === 'de');
  const isEnglish = computed(() => currentLang.value === 'en');

  return {
    currentLang: readonly(currentLang),
    setLanguage,
    isGerman,
    isEnglish,
    supportedLanguages: SUPPORTED_LANGUAGES,
  };
}

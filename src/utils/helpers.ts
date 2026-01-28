import type { Language } from '@/types/language.type';

export function setLanguageHTMLAttributes(lang: Language) {
  localStorage.setItem('user-lang', lang);
  document.documentElement.setAttribute('lang', lang);
}

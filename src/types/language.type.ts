import type { SUPPORTED_LANGUAGES } from '@/language';

export type Language = (typeof SUPPORTED_LANGUAGES)[number];
export type SupportedLocales = 'en' | 'de';

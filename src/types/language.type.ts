import type { SUPPORTED_LANGS } from '@/constants';

export type Language = (typeof SUPPORTED_LANGS)[number];
export type SupportedLocales = 'en' | 'de';

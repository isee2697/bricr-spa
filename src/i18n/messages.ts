import { AppLocale } from '../context/locale/AppLocale.enum';

import enMessages from './data/en.json';
import nlMessages from './data/nl.json';

export const translations: Record<AppLocale, Record<string, string>> = {
  [AppLocale.en]: enMessages,
  [AppLocale.nl]: nlMessages,
};

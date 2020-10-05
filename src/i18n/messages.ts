import { AppLocale } from 'context/locale/AppLocale.enum';
import nl from './data/nl.json';
import zh from './data/zh.json';
import de from './data/de.json';
import es from './data/es.json';
import en from './data/en.json';

export const translations: Record<AppLocale, Record<string, string>> = {
  [AppLocale.nl]: nl,
  [AppLocale.zh]: zh,
  [AppLocale.de]: de,
  [AppLocale.es]: es,
  [AppLocale.en]: en,
};

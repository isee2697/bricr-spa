import { AppLocale } from '../../context/locale/AppLocale.enum';

import enMessages from './en.json';
import nlMessages from './nl.json';
import deMessages from './de.json';
import esMessages from './es.json';
import zhMessages from './zh.json';

export const languages = {
  [AppLocale.en]: enMessages,
  [AppLocale.nl]: nlMessages,
  [AppLocale.de]: deMessages,
  [AppLocale.zh]: zhMessages,
  [AppLocale.es]: esMessages,
};

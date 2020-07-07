import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import countries from 'i18n-iso-countries';

import { AppLocale } from '../AppLocale.enum';
import { defaultLocale } from '../defaultLocale';
import { translations } from '../../../i18n/messages';
import { LocaleContext } from '../localeContext/LocaleContext';

import { LocaleContextControllerProps } from './LocaleContextController.types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));
// eslint-disable-next-line @typescript-eslint/no-var-requires
countries.registerLocale(require('i18n-iso-countries/langs/nl.json'));

const formats = {
  number: {
    EUR: {
      style: 'currency',
      currency: 'EUR',
    },
  },
};

export const LocaleContextController = ({ children }: LocaleContextControllerProps) => {
  const [locale, setLocale] = useState<AppLocale>(defaultLocale);

  return (
    <IntlProvider
      defaultLocale={defaultLocale}
      locale={locale}
      messages={translations[locale]}
      formats={formats}
      defaultFormats={formats}
    >
      <LocaleContext.Provider value={{ defaultLocale, locale, setLocale }}>{children}</LocaleContext.Provider>
    </IntlProvider>
  );
};

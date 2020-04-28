import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';

import { AppLocale } from '../AppLocale.enum';
import { defaultLocale } from '../defaultLocale';
import { translations } from '../../../i18n/messages';
import { LocaleContext } from '../localeContext/LocaleContext';

import { LocaleContextControllerProps } from './LocaleContextController.types';

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

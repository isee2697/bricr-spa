import React, { useContext, useMemo } from 'react';
import ReactDOMServer from 'react-dom/server';
import { IntlShape, MessageDescriptor, useIntl } from 'react-intl';
import { FormattedMessage } from 'react-intl-phraseapp';
import { PrimitiveType } from 'intl-messageformat';

import { LocaleContext } from 'context/locale/localeContext/LocaleContext';
import { LocaleContextValueType } from 'context/locale/localeContext/LocaleContext.types';

export const useLocale = (): IntlShape & LocaleContextValueType => {
  const intl = useIntl();
  const localeContext = useContext(LocaleContext);

  if (localeContext === undefined) {
    throw new Error('LocaleContext is unavailable, make sure you are using LocaleContextController');
  }

  const formatMessage = (descriptor: MessageDescriptor, values?: Record<string, PrimitiveType>) => {
    const message = <FormattedMessage {...descriptor} values={values} />;

    return ReactDOMServer.renderToString(message).replace(/<\/?span[^>]*>/g, '');
  };

  const locale = useMemo(
    () => ({
      ...intl,
      ...localeContext,
      formatMessage: process.env.REACT_APP_PHRASE_ENABLED ? formatMessage : intl.formatMessage,
    }),
    [intl, localeContext],
  );

  return locale;
};

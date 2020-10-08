import ReactDOMServer from 'react-dom/server';
import React, { useContext, useMemo } from 'react';
import { IntlShape, MessageDescriptor, useIntl } from 'react-intl';
import { PrimitiveType } from 'intl-messageformat';
import { FormattedMessage } from 'react-intl-phraseapp';

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
      formatMessage: Boolean(process.env.REACT_APP_PHRASE_PROJECT) ? formatMessage : intl.formatMessage,
    }),
    [intl, localeContext],
  );

  return locale;
};

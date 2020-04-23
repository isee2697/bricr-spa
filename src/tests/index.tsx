import React, { ReactNode } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { Queries } from '@testing-library/dom';
import { IntlProvider } from 'react-intl';

import { AppLocale } from '../context/locale/AppLocale.enum';
import { defaultLocale } from '../context/locale/defaultLocale';
import { LocaleContext } from '../context/locale/localeContext/LocaleContext';
import { AuthContextController } from 'context/auth/authContextController/AuthContextController';
import { ApiClientContextController } from 'context/apiClient/apiClientContextController/ApiClientContextController';
import { Theme } from 'theme/Theme';

const Wrapper = ({ children }: { children?: ReactNode }) => {
  const [locale, setLocale] = React.useState<AppLocale>(defaultLocale);

  return (
    <IntlProvider onError={() => {}} defaultLocale={defaultLocale} locale={locale}>
      <Theme>
        <AuthContextController>
          <ApiClientContextController>
            <LocaleContext.Provider value={{ defaultLocale, locale, setLocale }}>
              <Router>{children}</Router>
            </LocaleContext.Provider>
          </ApiClientContextController>
        </AuthContextController>
      </Theme>
    </IntlProvider>
  );
};

function customRender(ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult;
function customRender<Q extends Queries>(ui: React.ReactElement, options: RenderOptions<Q>): RenderResult<Q>;
function customRender<Q extends Queries>(
  ui: React.ReactElement,
  options?: RenderOptions<Q> | Omit<RenderOptions, 'queries'>,
): RenderResult<Q> | RenderResult {
  return render<Q>(ui, { wrapper: options?.wrapper ?? Wrapper, ...options });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };

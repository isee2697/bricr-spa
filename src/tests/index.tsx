import React, { ReactNode } from 'react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { Queries } from '@testing-library/dom';
import { IntlProvider } from 'react-intl';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';
import { QueryParamProvider } from 'use-query-params';

import { AppLocale } from '../context/locale/AppLocale.enum';
import { defaultLocale } from '../context/locale/defaultLocale';
import { LocaleContext } from '../context/locale/localeContext/LocaleContext';
import { AuthContextController } from 'context/auth/authContextController/AuthContextController';
import { ApiClientContextController } from 'context/apiClient/apiClientContextController/ApiClientContextController';
import { Theme } from 'theme/Theme';
import { OverlayContextController } from 'context/overlay/overlayContextController/OverlayContextController';
import { ModalContextController } from 'context/modal/modalContextController/ModalContextController';

const Wrapper = ({ children }: { children?: ReactNode }) => {
  const [locale, setLocale] = React.useState<AppLocale>(defaultLocale);

  return (
    <IntlProvider onError={() => {}} defaultLocale={defaultLocale} locale={locale}>
      <Theme>
        <AuthContextController>
          <ApiClientContextController>
            <LocaleContext.Provider value={{ defaultLocale, locale, setLocale }}>
              <OverlayContextController>
                <ModalContextController>
                  <MuiPickersUtilsProvider utils={LuxonUtils}>
                    <Router>
                      <QueryParamProvider ReactRouterRoute={Route}>{children}</QueryParamProvider>
                    </Router>
                  </MuiPickersUtilsProvider>
                </ModalContextController>
              </OverlayContextController>
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

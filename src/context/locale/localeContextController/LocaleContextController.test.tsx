import React, { ReactNode } from 'react';

import { AppLocale } from '../AppLocale.enum';
import { defaultLocale } from '../defaultLocale';
import { LocaleContext } from '../localeContext/LocaleContext';
import { render } from 'tests';
import { AuthContextController } from 'context/auth/authContextController/AuthContextController';

import { LocaleContextController } from './LocaleContextController';

describe('LocaleContextController', () => {
  const wrapper = ({ children }: { children?: ReactNode }) => <>{children}</>;

  const TestComponent = () => {
    const context = React.useContext(LocaleContext);

    return (
      <>
        <button onClick={() => context?.setLocale(AppLocale.nl)}>SET LOCALE</button>
        <div title="CONTEXT">{JSON.stringify(context)}</div>
      </>
    );
  };

  test('renders its children', () => {
    const { getByText } = render(
      <AuthContextController>
        <LocaleContextController>
          <span>TEST</span>
        </LocaleContextController>
      </AuthContextController>,
      { wrapper },
    );

    expect(getByText(/TEST/)).toBeInTheDocument();
  });

  test('provides functioning locale context', () => {
    const { getByTitle, getByText } = render(
      <AuthContextController>
        <LocaleContextController>
          <TestComponent />
        </LocaleContextController>
      </AuthContextController>,
      { wrapper },
    );

    expect(getByTitle(/CONTEXT/)).toHaveTextContent(
      JSON.stringify({
        defaultLocale,
        locale: defaultLocale,
      }),
    );

    getByText(/SET LOCALE/).click();

    expect(getByTitle(/CONTEXT/)).toHaveTextContent(
      JSON.stringify({
        defaultLocale,
        locale: AppLocale.nl,
      }),
    );
  });
});

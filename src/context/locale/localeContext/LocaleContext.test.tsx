import React from 'react';
import { render } from 'tests';
import { AuthContextController } from 'context/auth/authContextController/AuthContextController';

import { LocaleContext } from './LocaleContext';

describe('LocaleContext', () => {
  test('is undefined by default', () => {
    const { getByTitle } = render(
      <AuthContextController>
        <LocaleContext.Consumer>{context => <div title="CONTEXT">{typeof context}</div>}</LocaleContext.Consumer>
      </AuthContextController>,
      {
        wrapper: ({ children }) => <>{children}</>,
      },
    );

    expect(getByTitle(/CONTEXT/)).toHaveTextContent('undefined');
  });
});

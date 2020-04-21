import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Theme } from '../theme/Theme';
import { UserController } from 'context/auth/userController/UserController';
import { LocaleContextController } from 'context/locale/localeContextController/LocaleContextController';
import { ApiClientContextController } from 'context/apiClient/apiClientContextController/ApiClientContextController';
import { AuthContextController } from 'context/auth/authContextController/AuthContextController';
import { ErrorBoundary } from 'app/errorBoundary/ErrorBoundary';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <Theme>
    <LocaleContextController>
      <ErrorBoundary>
        <AuthContextController>
          <ApiClientContextController>
            <UserController>
              <Router>{children}</Router>
            </UserController>
          </ApiClientContextController>
        </AuthContextController>
      </ErrorBoundary>
    </LocaleContextController>
  </Theme>
);

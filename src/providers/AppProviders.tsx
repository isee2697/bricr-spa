import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Theme } from 'theme/Theme';
import { ErrorBoundary } from 'app/errorBoundary/ErrorBoundary';
import { UserController } from 'context/auth/userController/UserController';
import { LocaleContextController } from 'context/locale/localeContextController/LocaleContextController';
import { ApiClientContextController } from 'context/apiClient/apiClientContextController/ApiClientContextController';
import { AuthContextController } from 'context/auth/authContextController/AuthContextController';
import { OverlayContextController } from 'context/overlay/overlayContextController/OverlayContextController';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <Theme>
    <LocaleContextController>
      <ErrorBoundary>
        <AuthContextController>
          <ApiClientContextController>
            <UserController>
              <OverlayContextController>
                <Router>{children}</Router>
              </OverlayContextController>
            </UserController>
          </ApiClientContextController>
        </AuthContextController>
      </ErrorBoundary>
    </LocaleContextController>
  </Theme>
);

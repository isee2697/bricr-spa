import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';
import { QueryParamProvider } from 'use-query-params';
import { ThroughProvider } from 'react-through';

import { Theme } from 'theme/Theme';
import { ErrorBoundary } from 'app/errorBoundary/ErrorBoundary';
import { UserController } from 'context/auth/userController/UserController';
import { LocaleContextController } from 'context/locale/localeContextController/LocaleContextController';
import { ApiClientContextController } from 'context/apiClient/apiClientContextController/ApiClientContextController';
import { AuthContextController } from 'context/auth/authContextController/AuthContextController';
import { OverlayContextController } from 'context/overlay/overlayContextController/OverlayContextController';
import { ModalContextController } from 'context/modal/modalContextController/ModalContextController';
import { LayoutContextController } from 'context/layout';
import { SnackbarContextController } from 'context/snackbar/snackbarContextController/SnackbarContextController';
import { NylasAccountContextController } from 'context/nylasContext/nylasAccountContextController/NylasAccountContextController';
import { NylasAccountController } from 'context/nylasContext/nylasAccountController/NylasAccountController';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThroughProvider>
    <Theme>
      <AuthContextController>
        <NylasAccountContextController>
          <LocaleContextController>
            <MuiPickersUtilsProvider utils={LuxonUtils}>
              <ErrorBoundary>
                <SnackbarContextController>
                  <ApiClientContextController>
                    <UserController>
                      <NylasAccountController>
                        <OverlayContextController>
                          <ModalContextController>
                            <LayoutContextController>
                              <Router>
                                <QueryParamProvider ReactRouterRoute={Route}>{children}</QueryParamProvider>
                              </Router>
                            </LayoutContextController>
                          </ModalContextController>
                        </OverlayContextController>
                      </NylasAccountController>
                    </UserController>
                  </ApiClientContextController>
                </SnackbarContextController>
              </ErrorBoundary>
            </MuiPickersUtilsProvider>
          </LocaleContextController>
        </NylasAccountContextController>
      </AuthContextController>
    </Theme>
  </ThroughProvider>
);

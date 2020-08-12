import React from 'react';

import { AppRoutes } from 'routing/AppRoutes';
import { Snackbar } from 'ui/molecules';

import { AddPimModalContainer } from './shared/addPimModal/AddPimModalContainer';

export const App = () => (
  <>
    <AppRoutes />
    <AddPimModalContainer />
    <Snackbar />
  </>
);

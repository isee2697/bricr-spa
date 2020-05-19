import React from 'react';

import { AppRoutes } from 'routing/AppRoutes';

import { AddPimModalContainer } from './pim/addPimModal/AddPimModalContainer';

export const App = () => (
  <>
    <AppRoutes />
    <AddPimModalContainer />
  </>
);

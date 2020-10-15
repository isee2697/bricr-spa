import React from 'react';

import { AppRoutes } from 'routing/AppRoutes';
import { Snackbar } from 'ui/molecules';
import { Intercom } from 'app/intercom/Intercom';

import { AddPimModalContainer } from './shared/addPimModal/AddPimModalContainer';
import { AddRelationModalContainer } from './shared/addRelationModal/AddRelationModalContainer';
export const App = () => (
  <>
    <AppRoutes />
    <AddPimModalContainer />
    <AddRelationModalContainer />
    <Snackbar />
    <Intercom />
  </>
);

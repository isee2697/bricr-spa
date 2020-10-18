import React from 'react';

import { AppRoutes } from 'routing/AppRoutes';
import { Snackbar } from 'ui/molecules';
import { Intercom } from 'app/intercom/Intercom';

import { AddPimModalContainer } from './shared/addPimModal/AddPimModalContainer';
import { AddCrmRelationModalContainer } from './shared/addCrmRelationModal/AddCrmRelationModalContainer';
import { LinkPartnerModalContainer } from './shared/linkPartnerModal/LinkPartnerModalContainer';
import { LinkProfileModalContainer } from './shared/linkProfileModal/LinkProfileModalContainer';

export const App = () => (
  <>
    <AppRoutes />
    <AddPimModalContainer />
    <AddCrmRelationModalContainer />
    <LinkPartnerModalContainer />
    <LinkProfileModalContainer />
    <Snackbar />
    <Intercom />
  </>
);

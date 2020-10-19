import React from 'react';

import { AppRoutes } from 'routing/AppRoutes';
import { Snackbar } from 'ui/molecules';
import { Intercom } from 'app/intercom/Intercom';

import { AddPimModalContainer } from './shared/addPimModal/AddPimModalContainer';
import { CreateNewTaskModalContainer } from './shared/createNewTaskModal/CreateNewTaskModalContainer';
import { AddCrmTimelineModalContainer } from './shared/addCrmTimelineModal/AddCrmTimelineModalContainer';

export const App = () => (
  <>
    <AppRoutes />
    <AddPimModalContainer />
    <CreateNewTaskModalContainer />
    <AddCrmTimelineModalContainer />
    <Snackbar />
    <Intercom />
  </>
);

import React from 'react';

import { AppRoutes } from 'routing/AppRoutes';
import { Snackbar } from 'ui/molecules';
import { Intercom } from 'app/intercom/Intercom';

import { AddPimModalContainer } from './shared/addPimModal/AddPimModalContainer';
import { MovePimModalContainer } from './shared/movePimModal/MovePimModalContainer';
import { AddCrmRelationModalContainer } from './shared/addCrmRelationModal/AddCrmRelationModalContainer';
import { CreateNewTaskModalContainer } from './shared/createNewTaskModal/CreateNewTaskModalContainer';
import { AddCrmTimelineModalContainer } from './shared/addCrmTimelineModal/AddCrmTimelineModalContainer';

export const App = () => (
  <>
    <AppRoutes />
    <AddPimModalContainer />
    <MovePimModalContainer />
    <AddCrmRelationModalContainer />
    <CreateNewTaskModalContainer />
    <AddCrmTimelineModalContainer />
    <Snackbar />
    <Intercom />
  </>
);

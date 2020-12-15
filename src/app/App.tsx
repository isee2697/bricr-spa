import React from 'react';

import { AppRoutes } from 'routing/AppRoutes';
import { Snackbar } from 'ui/molecules';
import { Intercom } from 'app/intercom/Intercom';
import { usePages } from 'hooks';

import { AddPimModalContainer } from './shared/addPimModal/AddPimModalContainer';
import { MovePimModalContainer } from './shared/movePimModal/MovePimModalContainer';
import { AddCrmRelationModalContainer } from './shared/addCrmRelationModal/AddCrmRelationModalContainer';
import { CreateNewTaskModalContainer } from './shared/createNewTaskModal/CreateNewTaskModalContainer';
import { AddCrmTimelineModalContainer } from './shared/addCrmTimelineModal/AddCrmTimelineModalContainer';
import { AddSalesItemModalContainer } from './shared/addSalesItemModal/AddSalesItemModalContainer';

export const App = () => {
  usePages(true);

  return (
    <>
      <AppRoutes />
      <AddPimModalContainer />
      <MovePimModalContainer />
      <AddCrmRelationModalContainer />
      <CreateNewTaskModalContainer />
      <AddCrmTimelineModalContainer />
      <AddSalesItemModalContainer />
      <Snackbar />
      <Intercom />
    </>
  );
};

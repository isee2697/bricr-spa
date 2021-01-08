import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';

import { CreateNewDashboardModal } from './CreateNewDashboardModal';
import { CreateNewDashboardBody } from './CreateNewDashboardModal.types';

export const CreateNewDashboardModalContainer = () => {
  const { isOpen } = useModalState('create-new-dashboard');
  const { close } = useModalDispatch();

  const handleCreateNewChart = async (values: CreateNewDashboardBody) => {
    return true;
  };

  return (
    <CreateNewDashboardModal
      isOpened={isOpen}
      onClose={() => close('create-new-dashboard')}
      onSubmit={handleCreateNewChart}
    />
  );
};

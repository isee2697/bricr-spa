import React from 'react';

import { useModalDispatch, useModalState } from 'hooks';

import { CreateNewChartModal } from './CreateNewChartModal';
import { CreateNewChartBody } from './CreateNewChartModal.types';

export const CreateNewChartModalContainer = () => {
  const { isOpen } = useModalState('create-new-chart');
  const { close } = useModalDispatch();

  const handleCreateNewChart = async (values: CreateNewChartBody) => {
    return true;
  };

  return (
    <CreateNewChartModal isOpened={isOpen} onClose={() => close('create-new-chart')} onSubmit={handleCreateNewChart} />
  );
};

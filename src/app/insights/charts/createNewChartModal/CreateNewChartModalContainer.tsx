import React from 'react';
import * as uuid from 'uuid';
import { useHistory } from 'react-router';

import { useModalDispatch, useModalState } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';

import { CreateNewChartModal } from './CreateNewChartModal';
import { CreateNewChartBody } from './CreateNewChartModal.types';

export const CreateNewChartModalContainer = () => {
  const { push } = useHistory();
  const { isOpen } = useModalState('create-new-chart');
  const { close } = useModalDispatch();

  const handleCreateNewChart = async (values: CreateNewChartBody) => {
    const id = uuid.v4();
    push(AppRoute.chartDetail.replace(':id', id));
    close('create-new-chart');

    return true;
  };

  return (
    <CreateNewChartModal isOpened={isOpen} onClose={() => close('create-new-chart')} onSubmit={handleCreateNewChart} />
  );
};

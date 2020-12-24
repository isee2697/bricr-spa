import React from 'react';
import { useHistory } from 'react-router-dom';

import { useModalDispatch, useModalState } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';

import { AddLivingSituationTypeModal } from './AddLivingSituationTypeModal';
import { LivingSituationTypeSubmitBody } from './AddLivingSituationTypeModal.types';

export const AddLivingSituationTypeModalContainer = () => {
  const { close } = useModalDispatch();
  const { isOpen } = useModalState('add-living-situation-type');
  const { push } = useHistory();

  const handleSubmitLivingSituation = async ({ type }: LivingSituationTypeSubmitBody) => {
    close('add-living-situation-type');

    push(`${AppRoute.livingSituation}/${type}`);

    return undefined;
  };

  return (
    <AddLivingSituationTypeModal
      isOpened={isOpen}
      onClose={() => close('add-living-situation-type')}
      onSubmit={handleSubmitLivingSituation}
    />
  );
};

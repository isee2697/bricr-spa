import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

import { AddNewFloorModal } from './AddNewFloorModal';
import { AddNewFloorSubmit, AddNewFloorModalContainerProps } from './AddNewFloorModal.types';

export const AddNewFloorModalContainer = ({ isOpened, onClose }: AddNewFloorModalContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const { push } = useHistory();

  const handleSubmit: AddNewFloorSubmit = async body => {
    try {
      // @TODO Api integration

      onClose();

      // @TODO Api integration
      push(AppRoute.pimDetails.replace(':id', id) + '/inside/' + body.type);

      return undefined;
    } catch {
      return {
        error: true,
      };
    }
  };

  return <AddNewFloorModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};

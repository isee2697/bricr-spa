import React from 'react';

import { AddNewFloorModal } from './AddNewFloorModal';
import { AddNewFloorSubmit, AddNewFloorModalContainerProps } from './AddNewFloorModal.types';

export const AddNewFloorModalContainer = ({ isOpened, onClose }: AddNewFloorModalContainerProps) => {
  const handleSubmit: AddNewFloorSubmit = async body => {
    try {
      // @TODO Api integration

      onClose();

      return undefined;
    } catch {
      return {
        error: true,
      };
    }
  };

  return <AddNewFloorModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};

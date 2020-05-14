import React from 'react';

import { AddNewSpaceModal } from './AddNewSpaceModal';
import { AddNewSpaceSubmit, AddNewSpaceModalContainerProps } from './AddNewSpaceModal.types';

export const AddNewSpaceModalContainer = ({ isOpened, onClose }: AddNewSpaceModalContainerProps) => {
  const handleSubmit: AddNewSpaceSubmit = async body => {
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

  return <AddNewSpaceModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};

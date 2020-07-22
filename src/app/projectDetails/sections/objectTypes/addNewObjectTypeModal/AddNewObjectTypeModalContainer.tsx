import React from 'react';

import { AddNewObjectTypeModal } from './AddNewObjectTypeModal';
import { AddNewObjectTypeModalContainerProps } from './AddNewObjectTypeModal.types';

export const AddNewObjectTypeModalContainer = ({ isOpened, onClose }: AddNewObjectTypeModalContainerProps) => {
  const handleSubmit = async (): Promise<{ error: boolean } | undefined> => {
    try {
      onClose();

      return undefined;
    } catch (e) {
      return { error: true };
    }
  };

  return <AddNewObjectTypeModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};

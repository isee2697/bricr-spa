import React from 'react';

import { AddLinkedPropertyModal } from './AddLinkedPropertyModal';
import { AddLinkedPropertyModalContainerProps } from './AddLinkedPropertyModal.types';

export const AddLinkedPropertyModalContainer = ({ isOpened, onClose }: AddLinkedPropertyModalContainerProps) => {
  const handleSubmit = async () => {
    return undefined;
  };

  return <AddLinkedPropertyModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};

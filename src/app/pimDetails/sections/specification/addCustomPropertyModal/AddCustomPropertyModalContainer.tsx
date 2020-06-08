import React from 'react';

import { AddCustomPropertyModalContainerProps } from './AddCustomPropertyModal.types';
import { AddCustomPropertyModal } from './AddCustomPropertyModal';

export const AddCustomPropertyModalContainer = ({ isOpened, onClose }: AddCustomPropertyModalContainerProps) => {
  const handleSubmit = async () => {
    return undefined;
  };

  return <AddCustomPropertyModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};

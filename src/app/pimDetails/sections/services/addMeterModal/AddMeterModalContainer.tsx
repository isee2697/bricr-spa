import React from 'react';

import { AddMeterModalContainerProps } from './AddMeterModal.types';
import { AddMeterModal } from './AddMeterModal';

export const AddMeterModalContainer = ({ isOpened, onClose }: AddMeterModalContainerProps) => {
  const handleSubmit = async () => {
    return undefined;
  };

  return <AddMeterModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};

import React from 'react';

import { AddInspectionModalContainerProps } from './AddInspectionModalContainer.types';
import { AddInspectionModal } from './AddInspectionModal';

export const AddInspectionModalContainer = ({
  isOpened,
  onClose,
  type,
  onAddCustomType,
}: AddInspectionModalContainerProps) => {
  const handleSubmit = async () => {
    return undefined;
  };

  return (
    <AddInspectionModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
      type={type}
      onAddCustomType={onAddCustomType}
    />
  );
};

import React from 'react';

import { AddOutsideFeatureModal } from './AddOutsideFeatureModal';
import { AddOutsideFeatureModalContainerProps } from './AddOutsideFeatureModal.types';

export const AddOutsideFeatureModalContainer = ({ isOpened, onClose }: AddOutsideFeatureModalContainerProps) => {
  const handleSubmit = async () => {
    return undefined;
  };

  return <AddOutsideFeatureModal isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit} />;
};

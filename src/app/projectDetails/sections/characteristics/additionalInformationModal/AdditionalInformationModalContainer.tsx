import React from 'react';

import {
  AdditionalInformationModalContainerProps,
  AdditionalInformationVisibility,
} from './AdditionalInformationModal.types';
import { AdditionalInformationModal } from './AdditionalInformationModal';

export const AdditionalInformationModalContainer = ({
  sections,
  isOpened,
  onClose,
}: AdditionalInformationModalContainerProps) => {
  const handleSubmit = async (values: AdditionalInformationVisibility) => {
    onClose();

    return undefined;
  };

  const initialValues = {
    sections,
  };

  return (
    <AdditionalInformationModal
      initialValues={initialValues}
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};

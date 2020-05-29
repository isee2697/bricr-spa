import React from 'react';

import { AddServiceModalContainerProps } from './AddServiceModal.types';
import { AddServiceModal } from './AddServiceModal';

export const AddServiceModalContainer = ({ type, types, isOpened, onClose }: AddServiceModalContainerProps) => {
  const handleSubmit = async () => {
    return undefined;
  };

  return (
    <AddServiceModal
      title={`pim_details.services.${type.toLowerCase()}_modal_title`}
      nameLabel={`pim_details.services.${type.toLowerCase()}_name_label`}
      types={types}
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};

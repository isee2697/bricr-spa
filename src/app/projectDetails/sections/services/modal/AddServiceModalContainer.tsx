import React from 'react';

import { AddServiceModal } from 'app/shared/services/modal/AddServiceModal';
import { AddServiceModalContainerProps, AddServiceSubmit } from 'app/shared/services/Service.types';

export const AddServiceModalContainer = ({
  type,
  types,
  isOpened,
  onClose,
  onAddService,
}: AddServiceModalContainerProps) => {
  const handleSubmit: AddServiceSubmit = async body => {
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

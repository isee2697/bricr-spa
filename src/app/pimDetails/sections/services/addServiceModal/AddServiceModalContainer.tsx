import React from 'react';

import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

import { AddServiceModalContainerProps } from './AddServiceModal.types';
import { AddServiceModal } from './AddServiceModal';
import { hotWaterTypes, heatingTypes, additionalTypes } from './dictionaries';

export const AddServiceModalContainer = ({ type, isOpened, onClose }: AddServiceModalContainerProps) => {
  const handleSubmit = async () => {
    return undefined;
  };

  let types: RadioDataType[] = [];

  switch (type) {
    case 'hotWater':
      types = hotWaterTypes;
      break;
    case 'heating':
      types = heatingTypes;
      break;
    case 'additional':
      types = additionalTypes;
      break;
  }

  return (
    <AddServiceModal
      title={`pim_details.services.${type}_modal_title`}
      nameLabel={`pim_details.services.${type}_name_label`}
      types={types}
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};

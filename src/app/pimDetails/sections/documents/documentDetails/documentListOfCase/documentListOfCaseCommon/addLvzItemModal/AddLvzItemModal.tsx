import React from 'react';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { FormModal } from 'ui/organisms';
import { GenericField } from 'form/fields';

import { AddLvzItemBody, AddLvzItemModalProps } from './AddLvzItemModal.types';

export const AddLvzItemModal = ({ onSubmit }: AddLvzItemModalProps) => {
  const { isOpen, options } = useModalState('add-lvz-item');
  const { close } = useModalDispatch();
  const { formatMessage } = useLocale();

  const handleSubmit = async (values: AddLvzItemBody) => {
    onSubmit(options?.id as number, values);

    return undefined;
  };

  return (
    <FormModal
      title={formatMessage({ id: 'pim_details.specification.outside.add_lvz_item' })}
      isOpened={isOpen}
      onClose={() => close('add-lvz-item')}
      onSubmit={handleSubmit}
      addText={formatMessage({ id: 'pim_details.specification.outside.add_lvz_item' })}
    >
      <GenericField
        label={formatMessage({ id: 'pim_details.specification.outside.description_lvz_item' })}
        name="description"
      />
    </FormModal>
  );
};

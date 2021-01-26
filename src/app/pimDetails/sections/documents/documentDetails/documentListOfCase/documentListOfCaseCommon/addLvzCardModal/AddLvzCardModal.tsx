import React from 'react';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { FormModal } from 'ui/organisms';
import { GenericField } from 'form/fields';

import { AddLvzCardModalProps } from './AddLvzCardModal.types';

export const AddLvzCardModal = ({ onSubmit }: AddLvzCardModalProps) => {
  const { isOpen } = useModalState('add-lvz-card');
  const { close } = useModalDispatch();
  const { formatMessage } = useLocale();

  return (
    <FormModal
      title={formatMessage({ id: 'pim_details.specification.outside.add_lvz_card' })}
      isOpened={isOpen}
      onClose={() => close('add-lvz-card')}
      onSubmit={onSubmit}
      addText={formatMessage({ id: 'pim_details.specification.outside.add_lvz_card' })}
    >
      <GenericField label={formatMessage({ id: 'pim_details.specification.outside.name_lvz_card' })} name="name" />
    </FormModal>
  );
};

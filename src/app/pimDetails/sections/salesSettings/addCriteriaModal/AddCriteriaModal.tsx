import React from 'react';

import { useLocale } from 'hooks';
import { FormModal } from 'ui/organisms';
import { GenericField } from 'form/fields';

import { AddCriteriaModalProps } from './AddCriteriaModal.types';

export const AddCriteriaModal = ({ isOpened, onClose, onSubmit }: AddCriteriaModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={onSubmit}
      title={formatMessage({ id: 'pim_details.allocate_criteria.add_modal.title' })}
      addText={formatMessage({ id: 'pim_details.allocate_criteria.add_criteria' })}
    >
      <GenericField
        name="name"
        placeholder={formatMessage({ id: 'pim_details.allocate_criteria.name.placeholder' })}
        label={formatMessage({ id: 'pim_details.allocate_criteria.name' })}
      />
    </FormModal>
  );
};

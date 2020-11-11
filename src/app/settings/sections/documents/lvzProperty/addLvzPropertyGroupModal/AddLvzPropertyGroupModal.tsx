import React from 'react';
import arrayMutators from 'final-form-arrays';

import { FormModal } from 'ui/organisms';
import { useLocale } from 'hooks';
import { GenericField } from 'form/fields';

import { AddLvzPropertyGroupModalProps } from './AddLvzPropertyGroupModal.types';

export const AddLvzPropertyGroupModal = ({ isOpened, onClose, onSubmit }: AddLvzPropertyGroupModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'settings.documents.lvz_property.add_lvz_group.title' })}
      onSubmit={onSubmit}
      mutators={{ ...arrayMutators }}
      addText={formatMessage({ id: 'settings.documents.lvz_property.add_lvz_group.add_button' })}
    >
      <GenericField
        fullWidth
        name="name"
        label={formatMessage({ id: 'settings.documents.lvz_property.add_lvz_group.name_lvz_group' })}
        placeholder={formatMessage({ id: 'settings.documents.lvz_property.add_lvz_group.name_lvz_group.placeholder' })}
      />
    </FormModal>
  );
};

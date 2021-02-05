import React from 'react';
import arrayMutators from 'final-form-arrays';

import { FormModal } from 'ui/organisms';
import { useLocale } from 'hooks';
import { GenericField } from 'form/fields';

import { AddLvzPropertyGroupItemModalProps } from './AddLvzPropertyGroupItemModal.types';

export const AddLvzPropertyGroupItemModal = ({ isOpened, onClose, onSubmit }: AddLvzPropertyGroupItemModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={onSubmit}
      title={formatMessage({ id: 'settings.documents.lvz_property.add_lvz_item.title' })}
      mutators={{ ...arrayMutators }}
      addText={formatMessage({ id: 'settings.documents.lvz_property.add_lvz_item.add_button' })}
    >
      <GenericField
        fullWidth
        name="name"
        label={formatMessage({ id: 'settings.documents.lvz_property.add_lvz_item.description_lvz_item' })}
        placeholder={formatMessage({
          id: 'settings.documents.lvz_property.add_lvz_item.description_lvz_item.placeholder',
        })}
      />
    </FormModal>
  );
};

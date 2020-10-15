import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { CheckboxGroupField } from 'form/fields';
import { FormModal } from 'ui/organisms';

import { AddMomentModalProps } from './AddMomentModal.types';

export const AddMomentModal = ({ title, isOpened, onClose, onSubmit, persons }: AddMomentModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <FormModal
        isOpened={isOpened}
        onClose={onClose}
        title={formatMessage({ id: title })}
        onSubmit={onSubmit}
        mutators={{ ...arrayMutators }}
      >
        <CheckboxGroupField options={persons} name="linked_managers" orientation="horizontal" xs={12} />
      </FormModal>
    </>
  );
};

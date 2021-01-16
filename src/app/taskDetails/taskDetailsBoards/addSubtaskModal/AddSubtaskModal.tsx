import React from 'react';

import { FormModal } from 'ui/organisms';
import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { GenericField } from 'form/fields';

import { AddSubtaskModalProps } from './AddSubtaskModal.types';

export const AddSubtaskModal = ({ onAddSubtask }: AddSubtaskModalProps) => {
  const { isOpen } = useModalState('add-subtask');
  const { close } = useModalDispatch();
  const { formatMessage } = useLocale();

  return (
    <FormModal
      isOpened={isOpen}
      onClose={() => close('add-subtask')}
      onSubmit={onAddSubtask}
      title={formatMessage({ id: 'tasks.details.add_subtask' })}
    >
      <GenericField name="title" label={formatMessage({ id: 'tasks.details.title' })} />
    </FormModal>
  );
};

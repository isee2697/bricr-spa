import React from 'react';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { FormModal } from 'ui/organisms';
import { AddIcon } from 'ui/atoms/icons';
import { GenericField } from 'form/fields';

import { AddQuestionnaireGroupBody, AddQuestionnaireGroupModalProps } from './AddQuestionnaireGroupModal.types';

export const AddQuestionnaireGroupModal = ({ onSubmit }: AddQuestionnaireGroupModalProps) => {
  const { close } = useModalDispatch();
  const { isOpen } = useModalState('add_questionnaire_group');
  const { formatMessage } = useLocale();

  const handleSubmit = async (values: AddQuestionnaireGroupBody) => {
    onSubmit(values);

    close('add_questionnaire_group');

    return undefined;
  };

  return (
    <FormModal
      title={formatMessage({ id: 'pim_details.documents.add_questionnaire_group' })}
      addText={formatMessage({ id: 'pim_details.documents.add_questionnaire_group' })}
      addIcon={<AddIcon color="inherit" />}
      isOpened={isOpen}
      onClose={() => close('add_questionnaire_group')}
      onSubmit={handleSubmit}
    >
      <GenericField name="name" label={formatMessage({ id: 'pim_details.documents.name_questionnaire_group' })} />
    </FormModal>
  );
};

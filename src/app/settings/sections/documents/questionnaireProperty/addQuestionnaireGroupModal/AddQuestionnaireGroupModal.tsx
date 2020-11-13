import arrayMutators from 'final-form-arrays';
import React from 'react';

import { useLocale } from 'hooks';
import { FormModal } from 'ui/organisms';
import { GenericField } from 'form/fields';

import { AddQuestionnaireGroupModalProps } from './AddQuestionnaireGroupModal.types';

export const AddQuestionnaireGroupModal = ({ isOpened, onClose, onSubmit }: AddQuestionnaireGroupModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'settings.documents.questionnaire.add_questionnaire_group.title' })}
      onSubmit={onSubmit}
      mutators={{ ...arrayMutators }}
      addText={formatMessage({ id: 'settings.documents.questionnaire.add_questionnaire_group.add_button' })}
    >
      <GenericField
        fullWidth
        name="name"
        label={formatMessage({
          id: 'settings.documents.questionnaire.add_questionnaire_group.name_questionnaire_group',
        })}
        placeholder={formatMessage({
          id: 'settings.documents.questionnaire.add_questionnaire_group.name_questionnaire_group.placeholder',
        })}
      />
    </FormModal>
  );
};

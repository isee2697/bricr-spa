import React from 'react';

import { FormModal } from 'ui/organisms';
import { useLocale } from 'hooks';
import { RadioGroupField } from 'form/fields';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { SquareIcon } from 'ui/atoms/icons';
import { FormSubSectionHeader } from 'ui/molecules';
import { DocumentType } from '../checklist/Checklist.types';

import { AddDocumentTypeModalProps, LivingSituationDocumentTypeSubmitBody } from './AddDocumentTypeModal.types';

export const AddDocumentTypeModal = ({ isOpened, onClose, onSubmit }: AddDocumentTypeModalProps) => {
  const { formatMessage } = useLocale();

  const handleSubmit = async (values: LivingSituationDocumentTypeSubmitBody) => {
    onSubmit(values);

    return undefined;
  };

  const typeOptions: RadioDataType[] = Object.keys(DocumentType).map(key => ({
    label: formatMessage({ id: `dictionaries.type_of_living_situation_document.${key}` }),
    value: key,
    icon: <SquareIcon />,
  }));

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
      title={formatMessage({ id: 'settings.living_situation_document_type.add_document_type.title' })}
      addText={formatMessage({ id: 'settings.living_situation_document_type.add_document_type.add_document_type' })}
    >
      <FormSubSectionHeader
        title={'settings.living_situation_document_type.add_document_type.type_of_document'}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
      />
      <RadioGroupField name="type" options={typeOptions} xs={2} />
    </FormModal>
  );
};

import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { FormModal } from 'ui/organisms';
import { GenericField } from 'form/fields';

import { AddContractTemplateModalProps } from './AddContractTemplateModal.types';

export const AddContractTemplateModal = ({ isOpened, onClose, onSubmit }: AddContractTemplateModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'settings.documents.contract_templates.add_contract_template.title' })}
      onSubmit={onSubmit}
      mutators={{ ...arrayMutators }}
      addText={formatMessage({ id: 'settings.documents.contract_templates.add_contract_template.add_button' })}
    >
      <GenericField
        fullWidth
        name="name"
        label={formatMessage({
          id: 'settings.documents.contract_templates.add_contract_template.name_contract_template_group',
        })}
        placeholder={formatMessage({
          id: 'settings.documents.contract_templates.add_contract_template.name_contract_template_group.placeholder',
        })}
      />
    </FormModal>
  );
};

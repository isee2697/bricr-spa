import React from 'react';

import { useLocale } from 'hooks';
import { DropdownItem } from 'ui/atoms/dropdown/Dropdown.types';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { DropdownField, GenericField } from 'form/fields';

import { Languages } from './DocumentName.types';

export const DocumentName = () => {
  const { formatMessage } = useLocale();

  const onSave = async () => {
    return undefined;
  };

  const languageDropdownItems: DropdownItem[] = Object.values(Languages).map(key => ({
    label: formatMessage({ id: `dictionaries.language.${key}` }),
    value: key,
  }));

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.documents.contracts.document_name' })}
      isEditable
      isExpandable
      isInitExpanded={false}
    >
      {isEditing => (
        <AutosaveForm onSave={onSave}>
          <GenericField
            disabled={!isEditing}
            name="name"
            label={formatMessage({ id: 'pim_details.documents.contracts.document_name' })}
          />
          <GenericField
            disabled={!isEditing}
            name="description"
            label={formatMessage({ id: 'pim_details.documents.contracts.description' })}
          />
          <DropdownField
            disabled={!isEditing}
            name="language"
            label={formatMessage({ id: 'pim_details.documents.contracts.language' })}
            items={languageDropdownItems}
            placeholder={formatMessage({ id: 'pim_details.documents.contracts.language.placeholder' })}
          />
        </AutosaveForm>
      )}
    </FormSection>
  );
};

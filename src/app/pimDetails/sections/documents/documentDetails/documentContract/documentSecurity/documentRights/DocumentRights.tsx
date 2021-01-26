import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { CheckboxGroupField } from 'form/fields';

import { DocumentTypes } from './dictionaries';

export const DocumentRights = () => {
  const { formatMessage } = useLocale();

  const onSave = async () => {
    return undefined;
  };

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.documents.contracts.document_rights' })}
      isEditable
      isExpandable
      isInitExpanded={false}
    >
      {isEditing => (
        <AutosaveForm onSave={onSave} mutators={{ ...arrayMutators }}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.documents.contracts.type_of_document' })}
            subtitle={formatMessage({ id: 'common.choose_one_or_more_options_below' })}
          />
          <CheckboxGroupField
            xs={2}
            name="type"
            options={DocumentTypes.map(type => ({
              ...type,
              label: formatMessage({ id: type.label }),
            }))}
          />
        </AutosaveForm>
      )}
    </FormSection>
  );
};

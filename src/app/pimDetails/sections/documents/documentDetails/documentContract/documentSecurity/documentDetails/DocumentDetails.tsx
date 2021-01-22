import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { CheckboxGroupField } from 'form/fields';

import { Roles } from './dictionaries';

export const DocumentDetails = () => {
  const { formatMessage } = useLocale();

  const onSave = async () => {
    return undefined;
  };

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.documents.contracts.document_details' })}
      isEditable
      isExpandable
      isInitExpanded={false}
    >
      {isEditing => (
        <AutosaveForm onSave={onSave} mutators={{ ...arrayMutators }}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.documents.contracts.visible_for_role' })}
            subtitle={formatMessage({ id: 'common.choose_one_or_more_options_below' })}
          />
          <CheckboxGroupField
            xs={2}
            name="visibleRoles"
            options={Roles.map(role => ({
              ...role,
              label: formatMessage({ id: role.label }),
            }))}
          />
        </AutosaveForm>
      )}
    </FormSection>
  );
};

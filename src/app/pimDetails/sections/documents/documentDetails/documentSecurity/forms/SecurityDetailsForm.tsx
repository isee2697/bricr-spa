import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { RadioGroupField } from 'form/fields';
import { Box } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { DocumentRoleTypes } from '../../dictionaires';

export function SecurityDetailsForm() {
  const { formatMessage } = useLocale();

  return (
    <FormSection title={formatMessage({ id: 'pim_details.documents.document_details' })} isExpandable isInitExpanded>
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.documents.visible_for_role' })}
            subtitle={formatMessage({ id: 'common.choose_one_or_more_option_below' })}
          />
          <Box mt={2} />
          <RadioGroupField disabled={!editing} name="documentRole.type" options={DocumentRoleTypes} />
        </AutosaveForm>
      )}
    </FormSection>
  );
}

import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { RadioGroupField } from 'form/fields';
import { Box } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { DocumentRightTypes } from '../../dictionaires';

export function SecurityRightsForm() {
  const { formatMessage } = useLocale();

  return (
    <FormSection title={formatMessage({ id: 'pim_details.documents.document_rights' })} isExpandable isInitExpanded>
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.documents.type_of_document' })}
            subtitle={formatMessage({ id: 'common.choose_one_or_more_option_below' })}
          />
          <Box mt={2} />
          <RadioGroupField disabled={!editing} name="documentRight.type" options={DocumentRightTypes} />
        </AutosaveForm>
      )}
    </FormSection>
  );
}

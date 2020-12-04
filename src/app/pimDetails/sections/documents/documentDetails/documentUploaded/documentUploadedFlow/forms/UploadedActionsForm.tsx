import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { RadioGroupField } from 'form/fields';
import { Box } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { DocumentActionTypes } from '../../../dictionaires';

export function UploadedActionsForm() {
  const { formatMessage } = useLocale();

  return (
    <FormSection title={formatMessage({ id: 'pim_details.documents.document_action' })} isExpandable isInitExpanded>
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'pim_details.documents.allow_in_workflows' })}
            subtitle={formatMessage({ id: 'common.choose_one_or_more_option_below' })}
          />
          <Box mt={2} />
          <RadioGroupField disabled={!editing} name="documentAction.type" options={DocumentActionTypes} />
        </AutosaveForm>
      )}
    </FormSection>
  );
}

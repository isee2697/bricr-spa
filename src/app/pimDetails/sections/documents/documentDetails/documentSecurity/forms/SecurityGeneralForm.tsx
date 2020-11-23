import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { Box, MenuItem, Select } from 'ui/atoms';

export function SecurityGeneralForm() {
  const { formatMessage } = useLocale();
  const languageOptions: string[] = [];

  return (
    <FormSection title={formatMessage({ id: 'pim_details.documents.document_name' })} isExpandable isInitExpanded>
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          <GenericField disabled={!editing} name="name" label="pim_details.documents.document_name" size="medium" />
          <Box mt={1} />
          <GenericField disabled={!editing} name="description" label="common.description" size="medium" />
          <Box mt={3} />
          <Select disabled={!editing} name="language" label="pim_details.documents.language" fullWidth>
            {languageOptions.map(option => (
              <MenuItem key={option} value={option}>
                {formatMessage({ id: `language.${option}` })}
              </MenuItem>
            ))}
          </Select>
        </AutosaveForm>
      )}
    </FormSection>
  );
}

import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { Checkbox, FormControlLabel, Typography } from 'ui/atoms';

export function ContractPublicLawForm() {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.documents.public_law_restrictions' })}
      isExpandable
      isInitExpanded
    >
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label={
              <Typography variant="h5">
                {formatMessage({ id: 'pim_details.documents.public_law_restrictions.check' })}
              </Typography>
            }
          />
          <GenericField
            disabled={!editing}
            name="note"
            label="pim_details.documents.note"
            placeholder={formatMessage({ id: 'pim_details.documents.public_law_restritions.note_placeholder' })}
            size="medium"
          />
        </AutosaveForm>
      )}
    </FormSection>
  );
}

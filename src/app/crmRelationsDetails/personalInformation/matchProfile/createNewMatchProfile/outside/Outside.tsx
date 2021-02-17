import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { Grid } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { SubSectionProps } from '../CreateNewMatchProfile.types';
import { QuantityField } from 'form/fields';

export const Outside = ({ onSave }: SubSectionProps) => {
  const { formatMessage } = useLocale();

  return (
    <AutosaveForm mutators={{ ...arrayMutators }} onSave={onSave}>
      <FormSection
        title={formatMessage({ id: 'crm.details.personal_information_match_profile.outside.title' })}
        isExpandable
        isInitExpanded
        isInitEditing
      >
        {isEditing => (
          <>
            <FormSubSectionHeader
              title={formatMessage({
                id: 'crm.details.personal_information_match_profile.outside.garage',
              })}
              noBorder
            />
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <QuantityField
                  name="outside.minGarage"
                  label={formatMessage({
                    id: 'crm.details.personal_information_match_profile.outside.car',
                  })}
                  disabled={!isEditing}
                />
              </Grid>
            </Grid>
          </>
        )}
      </FormSection>
    </AutosaveForm>
  );
};

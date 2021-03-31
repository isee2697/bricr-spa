import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Grid } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { QuantityField } from 'form/fields';

export const Outside = () => {
  const { formatMessage } = useLocale();
  const { matchProfileId } = useParams<{ matchProfileId?: string }>();

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.personal_information_match_profile.outside.title' })}
      isExpandable
      isInitExpanded
      isInitEditing={!matchProfileId}
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
  );
};

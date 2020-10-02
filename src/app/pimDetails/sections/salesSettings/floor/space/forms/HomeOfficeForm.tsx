import React from 'react';

import { FormSubSectionHeader } from 'ui/molecules';
import { Grid } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { useLocale } from 'hooks';
import { SpaceFormProps } from '../Space.types';

export const HomeOfficeForm = ({ fieldPrefix, isEditMode }: SpaceFormProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Grid item xs={12}>
        <FormSubSectionHeader noBorder title={formatMessage({ id: 'pim_details.inside.general_information' })} />
        <GenericField
          size="medium"
          label="pim_details.inside.notes"
          placeholder="pim_details.inside.space_notes_placeholder"
          name={`${fieldPrefix}.notes`}
          disabled={!isEditMode}
        />
      </Grid>
    </>
  );
};

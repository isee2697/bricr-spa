import React from 'react';

import { useLocale } from 'hooks';
import { Grid } from 'ui/atoms';
import { GenericField } from 'form/fields';

import { AogSpaceDescriptionProps } from './AogSpaceDescription.types';

export const AogSpaceDescription = ({ type }: AogSpaceDescriptionProps) => {
  const { formatMessage } = useLocale();

  return (
    <Grid item xs={12}>
      <GenericField
        name="description"
        placeholder={formatMessage({ id: `pim_details.${type.toLowerCase()}.description_placeholder` })}
      />
    </Grid>
  );
};

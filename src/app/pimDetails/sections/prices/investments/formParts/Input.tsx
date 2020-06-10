import React from 'react';

import { GenericField } from 'form/fields';
import { Grid } from 'ui/atoms';
import { GenericFieldProps } from 'form/fields/genericField/GenericField.types';

export const Input = (props: GenericFieldProps) => {
  return (
    <Grid item xs={4}>
      <GenericField size="medium" InputProps={{ endAdornment: <></> }} {...props} />
    </Grid>
  );
};

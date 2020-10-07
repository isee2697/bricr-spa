import React from 'react';
import { CheckboxField } from 'form/fields';
import { Box, Grid } from 'ui/atoms';
import { CheckboxFieldProps } from 'form/fields/checkboxField/CheckboxField.types';

export const Checkbox = (props: CheckboxFieldProps) => {
  return (
    <Grid item xs={4}>
      <Box mt={2}>
        <CheckboxField {...props} />
      </Box>
    </Grid>
  );
};

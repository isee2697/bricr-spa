import React from 'react';

import { Grid } from 'ui/atoms';
import { GenericField } from 'form/fields';

import { InputProps } from './FormParts.types';

export const Input = ({ disabled, placeholder, name, label }: InputProps) => {
  return (
    <Grid item xs={12}>
      <GenericField id={name} disabled={disabled} placeholder={placeholder} name={name} label={label} />
    </Grid>
  );
};

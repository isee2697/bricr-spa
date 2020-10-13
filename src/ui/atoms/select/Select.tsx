import { default as SelectBase, SelectProps } from '@material-ui/core/Select';

import React from 'react';
import { FormControl, InputLabel } from 'ui/atoms';

export const Select = ({ variant, label, fullWidth, ...props }: SelectProps) => (
  <FormControl fullWidth={fullWidth}>
    {label && (
      <InputLabel className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-marginDense MuiInputLabel-outlined">
        {label}
      </InputLabel>
    )}
    <SelectBase variant={variant || 'outlined'} fullWidth {...props} />
  </FormControl>
);

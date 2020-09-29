import React, { ChangeEvent, useState } from 'react';

import { GenericField } from 'form/fields';
import { Grid, InputAdornment } from 'ui/atoms';
import { useLocale } from 'hooks';

import { RangeProps } from './Range.types';

export const Range = ({ name, startValue, endValue, suffix = '' }: RangeProps) => {
  const [fromValue, setFromValue] = useState(startValue);
  const [toValue, setToValue] = useState(endValue);
  const { formatMessage } = useLocale();

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <GenericField
          name={formatMessage({ id: `${name}.from.name` })}
          label={formatMessage({ id: `${name}.from.label` })}
          placeholder={formatMessage({ id: `${name}.from.placeholder` })}
          size="medium"
          type="number"
          onChange={(e: ChangeEvent) => setFromValue(e.value)}
          value={fromValue}
          InputProps={{
            endAdornment: <InputAdornment position="end">{suffix}</InputAdornment>,
          }}
        />

        <GenericField
          name={formatMessage({ id: `${name}.to.name` })}
          label={formatMessage({ id: `${name}.to.label` })}
          placeholder={formatMessage({ id: `${name}.to.placeholder` })}
          size="medium"
          type="number"
          value={toValue}
          onChange={(e: ChangeEvent) => setToValue(e.value)}
          InputProps={{
            endAdornment: <InputAdornment position="end">{suffix}</InputAdornment>,
          }}
        />
      </Grid>
    </Grid>
  );
};

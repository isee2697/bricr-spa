import React from 'react';

import { DatePickerField } from 'form/fields';
import { Grid } from 'ui/atoms';
import { useLocale } from 'hooks';

import { DateRangeProps } from './DateRange.types';

export const DateRange = ({ name }: DateRangeProps) => {
  const { formatMessage } = useLocale();

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <DatePickerField name={`${name}.from`} label={formatMessage({ id: `filters.${name}.from` })} />
        <DatePickerField name={`${name}.to`} label={formatMessage({ id: `filters.${name}.to` })} />
      </Grid>
    </Grid>
  );
};

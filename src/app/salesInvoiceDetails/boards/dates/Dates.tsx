import React from 'react';

import { Card, CardContent, Grid, Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AutosaveForm } from 'ui/organisms';
import { DatePickerField, RadioGroupField } from 'form/fields';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

import { DatesProps } from './Dates.types';

export const Dates = ({ onSave }: DatesProps) => {
  const { formatMessage } = useLocale();

  const rangeTypes: RadioDataType[] = [
    {
      label: formatMessage({ id: 'sales.invoice.range_type.based_on_client_settings' }),
      value: 'clientSettings',
    },
    {
      label: formatMessage({ id: 'sales.invoice.range_type.more_than_14_days' }),
      value: 'moreThan14Days',
    },
    {
      label: formatMessage({ id: 'sales.invoice.range_type.more_than_30_days' }),
      value: 'moreThan30Days',
    },
    {
      label: formatMessage({ id: 'sales.invoice.range_type.more_than_21_days' }),
      value: 'moreThan21Days',
    },
    {
      label: formatMessage({ id: 'sales.invoice.range_type.more_than_17_days' }),
      value: 'moreThan17Days',
    },
  ];

  return (
    <Card>
      <CardContent>
        <AutosaveForm onSave={onSave}>
          <Grid item xs={12}>
            <Box>
              <Typography variant="h6" color="textSecondary">
                {formatMessage({ id: 'sales.invoice.invoice_number' })}
              </Typography>
              <Typography variant="h5">INV_2019G90178</Typography>
            </Box>
            <Box>
              <DatePickerField name="invoiceDate" label={formatMessage({ id: 'sales.invocie.invoice_date' })} />
              <DatePickerField name="dueDate" label={formatMessage({ id: 'sales.invocie.due_date' })} />
            </Box>
            <Box>
              <RadioGroupField optionType="checkbox" name="rangeType" options={rangeTypes} />
            </Box>
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};

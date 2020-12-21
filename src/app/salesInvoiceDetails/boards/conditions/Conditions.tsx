import React from 'react';

import { useLocale } from 'hooks';
import { Card, CardContent, Grid, Box, Typography } from 'ui/atoms';
import { AutosaveForm } from 'ui/organisms';
import { DropdownField, RadioGroupField } from 'form/fields';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

import { ConditionsProps, InvoiceCondition } from './Conditions.types';

export const Conditions = ({ onSave }: ConditionsProps) => {
  const { formatMessage } = useLocale();

  const invoiceConditions: RadioDataType[] = Object.keys(InvoiceCondition).map(key => ({
    label: formatMessage({ id: `sales.invoice.invoice_condition.${key}` }),
    value: key,
  }));

  return (
    <Card>
      <CardContent>
        <AutosaveForm onSave={onSave}>
          <Grid item xs={12}>
            <Typography variant="h6" color="textSecondary">
              {formatMessage({ id: 'sales.invoice.general.condition_of_invoice' })}
            </Typography>
            <RadioGroupField optionType="checkbox" name="invoiceCondition" options={invoiceConditions} />
            <Box mt={2}>
              <Typography variant="h6" color="textSecondary">
                {formatMessage({ id: 'sales.invoice.general.type_of_invoice' })}
              </Typography>
              <DropdownField
                margin="none"
                name="invoiceType"
                items={[]}
                placeholder={formatMessage({ id: 'sales.invoice.general.type_of_invoice.placeholder' })}
              />
            </Box>
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};

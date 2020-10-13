import React, { useCallback } from 'react';
import { useFieldArray } from 'react-final-form-arrays';
import { Box, Grid } from 'ui/atoms';

import { ApplianceField } from './applianceField/ApplianceField';
import { AppliancesFieldProps, AppliancesFieldItem } from './AppliancesField.types';

export const AppliancesField = ({ name, options, disabled }: AppliancesFieldProps) => {
  const { fields } = useFieldArray<{ name: string; quantity: number; notes: string }>(name);
  const currentValue = fields.value || [];

  const handleClick = useCallback(
    (item: AppliancesFieldItem) => {
      const index = currentValue.findIndex(field => field.name === item.value);

      if (index !== -1) {
        fields.remove(index);
      } else {
        fields.push({
          name: item.value,
          quantity: 0,
          notes: '',
        });
      }
    },
    [currentValue, fields],
  );

  return (
    <Box paddingTop={2}>
      <Grid container spacing={4}>
        {options.map((item: AppliancesFieldItem) => (
          <ApplianceField
            key={item.value}
            name={`${name}[${currentValue.findIndex(field => field.name === item.value)}]`}
            onClick={() => handleClick(item)}
            isSelected={currentValue.findIndex(field => field.name === item.value) !== -1}
            disabled={disabled}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </Grid>
    </Box>
  );
};

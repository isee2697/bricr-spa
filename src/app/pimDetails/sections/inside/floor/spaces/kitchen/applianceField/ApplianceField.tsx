import React from 'react';
import { useField } from 'react-final-form';

import { Grid, TileCheckbox, Box } from 'ui/atoms';
import { QuantityField, GenericField } from 'form/fields';
import { useLocale } from 'hooks';

import { ApplianceFieldProps } from './ApplianceField.types';

const DEFAULT_VALUE = {
  checked: false,
  notes: '',
  quantity: 0,
};

export const ApplianceField = ({ name, label, icon, disabled }: ApplianceFieldProps) => {
  const { formatMessage } = useLocale();
  const { input } = useField(name, {
    defaultValue: DEFAULT_VALUE,
  });

  return (
    <Grid item xs={12}>
      <Grid container spacing={0} alignItems="center">
        <Grid item xs="auto">
          <Box paddingLeft={1}>
            <TileCheckbox
              title={formatMessage({ id: label })}
              isSelected={input.value.checked}
              onClick={() => input.onChange(input.value.checked ? DEFAULT_VALUE : { ...DEFAULT_VALUE, checked: true })}
              isDisabled={disabled}
            >
              {icon}
            </TileCheckbox>
          </Box>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={4}>
          <QuantityField name={`${name}.quantity`} label="quantity.label" disabled={!input.value.checked || disabled} />
        </Grid>
        {input.value.checked && (
          <Grid item xs={12}>
            <GenericField
              name={`${name}.notes`}
              label="pim_details.inside.notes"
              placeholder="pim_details.inside.notes_placeholder"
              size="medium"
              disabled={disabled}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

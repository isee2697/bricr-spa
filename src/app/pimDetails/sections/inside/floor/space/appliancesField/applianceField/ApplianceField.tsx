import React from 'react';
import { Grid, TileCheckbox, Box } from 'ui/atoms';
import { QuantityField, GenericField } from 'form/fields';
import { useLocale } from 'hooks';

import { ApplianceFieldProps } from './ApplianceField.types';

export const ApplianceField = ({ name, label, icon, disabled, isSelected, onClick }: ApplianceFieldProps) => {
  const { formatMessage } = useLocale();

  return (
    <Grid item xs={12}>
      <Grid container spacing={0} alignItems="center">
        <Grid item xs="auto">
          <Box paddingLeft={1}>
            <TileCheckbox
              title={formatMessage({ id: label })}
              isSelected={isSelected}
              onClick={onClick}
              isDisabled={disabled}
            >
              {icon}
            </TileCheckbox>
          </Box>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={4}>
          <QuantityField min={0} name={`${name}.quantity`} label="quantity.label" disabled={!isSelected || disabled} />
        </Grid>
        {isSelected && (
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

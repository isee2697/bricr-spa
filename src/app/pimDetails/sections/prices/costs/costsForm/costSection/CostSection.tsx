import React from 'react';

import { FormSubSection } from 'ui/molecules';
import { Grid } from 'ui/atoms';
import { DropdownField, GenericField } from 'form/fields';
import { EuroIcon } from 'ui/atoms/icons';

import { CostSectionProps } from './CostSection.types';

export const CostSection = ({
  title,
  subtitle,
  costLabel,
  costName,
  selectLabelId,
  selectName,
  options,
  disabled,
}: CostSectionProps) => {
  return (
    <>
      <FormSubSection noBorder title={title} subtitle={subtitle} />
      <Grid container direction="row" alignItems="flex-end" spacing={1}>
        <Grid item xs={4}>
          <GenericField
            id={costName}
            name={costName}
            label={costLabel}
            placeholder="100 000"
            size="medium"
            InputProps={{ endAdornment: <EuroIcon /> }}
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={4}>
          <DropdownField
            name={selectName}
            items={options}
            label={selectLabelId}
            placeholder="common.select_placeholder"
            disabled={disabled}
          />
        </Grid>
      </Grid>
    </>
  );
};
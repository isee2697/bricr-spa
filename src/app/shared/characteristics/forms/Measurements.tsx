import React from 'react';

import { GenericField } from 'form/fields';
import { Grid } from 'ui/atoms';
import { AutoCalculateForm, FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { SquareMeterIcon } from 'ui/atoms/icons';
import { minValueValidator } from 'form/validators';

import { FormProps } from './Forms.types';

export const Measurements = ({ isInitEditing, isInitExpanded }: FormProps) => {
  const { formatMessage } = useLocale();

  const fromToRow = (name: string, disabled: boolean) => (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <GenericField
          name={`measurements.${name}From`}
          label={`project_details.characteristics.measurements.${name}_from`}
          placeholder={`project_details.characteristics.measurements.placeholder`}
          size="medium"
          disabled={disabled}
          type="number"
          InputProps={{
            endAdornment: <SquareMeterIcon />,
          }}
          inputProps={{
            min: 0,
          }}
          validate={[minValueValidator(0)]}
        />
      </Grid>
      <Grid item xs={4}>
        <GenericField
          name={`measurements.${name}To`}
          label={`project_details.characteristics.measurements.${name}_to`}
          placeholder={`project_details.characteristics.measurements.placeholder`}
          size="medium"
          disabled={disabled}
          type="number"
          InputProps={{
            endAdornment: <SquareMeterIcon />,
          }}
          validate={[minValueValidator(0)]}
        />
      </Grid>
    </Grid>
  );

  return (
    <FormSection
      title={formatMessage({ id: 'project_details.characteristics.measurements.title' })}
      isEditable
      isExpandable
      isInitExpanded={isInitExpanded}
      isInitEditing={isInitEditing}
    >
      {inEditMode => (
        <AutoCalculateForm
          name="measurements.calculateAutomatically"
          label={formatMessage({ id: 'project_details.general.construction.automatically_calculate' })}
          disabled={!inEditMode}
        >
          {isCalculated => (
            <>
              {fromToRow('volume', !inEditMode || isCalculated)}
              {fromToRow('livingSpace', !inEditMode || isCalculated)}
              {fromToRow('plotArea', !inEditMode || isCalculated)}
            </>
          )}
        </AutoCalculateForm>
      )}
    </FormSection>
  );
};

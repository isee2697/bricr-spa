import React from 'react';

import { GenericField } from 'form/fields';
import { Grid } from 'ui/atoms';
import { AutoCalculateForm, FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { SquareMeterIcon } from 'ui/atoms/icons';

export const Measurements = () => {
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
        />
      </Grid>
      <Grid item xs={4}>
        <GenericField
          name={`measurements.${name}To`}
          label={`project_details.characteristics.measurements.${name}_from`}
          placeholder={`project_details.characteristics.measurements.placeholder`}
          size="medium"
          disabled={disabled}
          type="number"
          InputProps={{
            endAdornment: <SquareMeterIcon />,
          }}
        />
      </Grid>
    </Grid>
  );

  return (
    <FormSection
      title={formatMessage({ id: 'project_details.characteristics.measurements.title' })}
      isEditable
      isExpandable
      isInitExpanded={false}
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

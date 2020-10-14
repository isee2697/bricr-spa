import React from 'react';

import { GenericField, DropdownField, CheckboxField } from 'form/fields';
import { Grid, Box } from 'ui/atoms';
import { useLocale } from 'hooks';

import { CriteriaProps } from './Criteria.types';

export const Criteria = ({ name, label, options }: CriteriaProps) => {
  const { formatMessage } = useLocale();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <DropdownField
          name={`${name}_criteria`}
          items={options}
          label={label}
          placeholder="settings.workflow.trigger_condition.trigger_type.placeholder"
          align="left"
        />
      </Grid>
      <Grid item xs={12}>
        <GenericField
          name={`${name}_value`}
          label={formatMessage({
            id: 'settings.workflow.trigger_condition.value',
          })}
          placeholder={formatMessage({
            id: 'settings.workflow.trigger_condition.criteria.placeholder',
          })}
          size="medium"
          // defaultValue={}
        />
      </Grid>
      <Grid item xs={12}>
        <Box mt={2}>
          <CheckboxField
            name={`${name}_is_exact_same`}
            label={formatMessage({
              id: 'settings.workflow.trigger_condition.criteria.exact_same',
            })}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

import React from 'react';

import { FormSubSectionHeader } from 'ui/molecules';
import { Grid, Box } from 'ui/atoms';
import { CheckboxField, CheckboxGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { SpaceFormProps } from '../Space.types';
import * as dictionaries from '../dictionaries';

export const LivingRoomForm = ({ fieldPrefix, isEditMode }: SpaceFormProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Grid item xs={12}>
        <FormSubSectionHeader noBorder title={formatMessage({ id: 'pim_details.inside.general_information' })} />
        <Box mt={1}>
          <CheckboxField
            label="pim_details.inside.stairs_in_livingroom"
            disabled={!isEditMode}
            name={`${fieldPrefix}.stairs`}
          />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <FormSubSectionHeader
          noBorder
          title={formatMessage({ id: 'pim_details.inside.type_of_livingroom' })}
          subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
        />
        <Box paddingTop={2} paddingLeft={2}>
          <CheckboxGroupField
            disabled={!isEditMode}
            xs={2}
            name={`${fieldPrefix}.type`}
            options={dictionaries.livingRoomType}
          />
        </Box>
      </Grid>
    </>
  );
};

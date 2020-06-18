import React from 'react';

import { FormSubSection } from 'ui/molecules';
import { Grid, Box } from 'ui/atoms';
import { CheckboxGroupField, GenericField } from 'form/fields';
import { useLocale } from 'hooks';
import { SpaceFormProps } from '../Space.types';
import * as dictionaries from '../dictionaries';

export const BathroomForm = ({ fieldPrefix, isEditMode }: SpaceFormProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Grid item xs={12}>
        <FormSubSection noBorder title={formatMessage({ id: 'pim_details.inside.general_information' })} />
        <Box width="33%">
          <GenericField
            size="medium"
            label="pim_details.inside.year_of_bathroom"
            placeholder="pim_details.inside.year_of_construction_placeholder"
            name={`${fieldPrefix}.constructionYear`}
            disabled={!isEditMode}
            type="number"
          />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <FormSubSection
          noBorder
          title={formatMessage({ id: 'pim_details.inside.bathroom_services' })}
          subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
        />
        <Box paddingTop={2} paddingLeft={2}>
          <CheckboxGroupField
            disabled={!isEditMode}
            xs={2}
            name={`${fieldPrefix}.services`}
            options={dictionaries.bathroomServices}
          />
        </Box>
      </Grid>
    </>
  );
};

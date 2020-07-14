import React from 'react';

import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { EuroIcon } from 'ui/atoms/icons';
import { GenericField } from 'form/fields';
import { FormSubSectionHeader } from 'ui/molecules';
import { FormSection, AutoCalculateForm } from 'ui/organisms';

import { PriceSectionProps } from './PriceSection.types';

export const PriceSection = ({ type }: PriceSectionProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormSection title={formatMessage({ id: `pim_details.prices.${type.toLowerCase()}` })} isExpandable isEditable>
      {inEditMode => (
        <AutoCalculateForm
          name={`${type.toLowerCase()}.calculateAutomatically`}
          label={formatMessage({ id: 'project_details.prices.automatically_calculate_prices' })}
          disabled={!inEditMode}
        >
          {isCalculated => (
            <Box mt={1}>
              <FormSubSectionHeader
                title={formatMessage({
                  id: `project_details.prices.${type === 'Sale' ? 'purchase_contract_price' : 'rental_price'}`,
                })}
                subtitle={formatMessage({ id: 'project_details.prices.set_up_the_price' })}
              />
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <GenericField
                    name={`${type.toLowerCase()}.minPrice`}
                    label="common.from"
                    placeholder="common.big_price_placeholder"
                    size="medium"
                    type="number"
                    InputProps={{
                      endAdornment: <EuroIcon />,
                    }}
                    disabled={!inEditMode || isCalculated}
                  />
                </Grid>
                <Grid item xs={4}>
                  <GenericField
                    name={`${type.toLowerCase()}.maxPrice`}
                    label="common.to"
                    placeholder="common.big_price_placeholder"
                    size="medium"
                    type="number"
                    InputProps={{
                      endAdornment: <EuroIcon />,
                    }}
                    disabled={!inEditMode || isCalculated}
                  />
                </Grid>
              </Grid>
            </Box>
          )}
        </AutoCalculateForm>
      )}
    </FormSection>
  );
};

import React from 'react';

import { useLocale } from 'hooks';
import { Grid, Box } from 'ui/atoms';
import { EuroIcon, SquareIcon } from 'ui/atoms/icons';
import { FormSubSection as SubSectionHeader } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { GenericField, DropdownField, RadioGroupField } from 'form/fields';

import * as dictionaries from './dictionaries';

export const Rent = () => {
  const { formatMessage } = useLocale();

  return (
    <FormSection title={formatMessage({ id: 'pim_details.prices.rent' })} isExpandable>
      {inEditMode => (
        <>
          <SubSectionHeader
            title={formatMessage({ id: 'pim_details.prices.price_settings' })}
            subtitle={formatMessage({ id: 'pim_details.prices.select_prefix' })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <GenericField
                name="rent.price"
                label="pim_details.prices.rental_price"
                placeholder="pim_details.prices.price_placeholder"
                size="medium"
                type="number"
                InputProps={{
                  endAdornment: <EuroIcon />,
                }}
                disabled={!inEditMode}
              />
            </Grid>
            <Grid item xs={4}>
              <DropdownField
                name="rent.sufix"
                items={dictionaries.rentPaymentFrequency.map(frequency => ({
                  label: formatMessage({ id: `dictionaries.prices.rent_payments_frequency.${frequency}` }),
                  value: frequency,
                }))}
                label="pim_details.prices.payments_frequency"
                placeholder="common.select_placeholder"
                disabled={!inEditMode}
              />
            </Grid>
          </Grid>
          <Box mb={4} />

          <SubSectionHeader
            title={formatMessage({ id: 'pim_details.prices.conditions' })}
            subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
            noBorder
          />
          <Box mb={2} />
          <RadioGroupField
            spacing={1}
            disabled={!inEditMode}
            xs={4}
            md={3}
            lg={2}
            name="rent.conditions"
            options={dictionaries.rentConditions.map(condition => ({
              label: `dictionaries.prices.rent_conditions.${condition}`,
              value: condition,
              icon: <SquareIcon />,
            }))}
          />
          <GenericField
            name="rent.notes"
            label="common.notes"
            placeholder="pim_details.prices.rent_notes_placeholder"
            disabled={!inEditMode}
          />
        </>
      )}
    </FormSection>
  );
};
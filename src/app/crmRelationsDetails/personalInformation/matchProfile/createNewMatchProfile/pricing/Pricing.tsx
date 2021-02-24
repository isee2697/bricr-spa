import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Box, Grid } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { DatePickerField, DropdownField, GenericField, RadioGroupField } from 'form/fields';
import { EuroIcon } from 'ui/atoms/icons';
import { PaymentFrequencyTypes, RentalPeriodTypes } from '../dictionaries';

export const Pricing = () => {
  const { formatMessage } = useLocale();
  const { matchProfileId } = useParams<{ matchProfileId?: string }>();

  return (
    <FormSection
      title={formatMessage({ id: 'crm.details.personal_information_match_profile.pricing.title' })}
      isExpandable
      isInitExpanded
      isInitEditing={!matchProfileId}
    >
      {isEditing => (
        <>
          <FormSubSectionHeader
            title={formatMessage({
              id: 'crm.details.personal_information_match_profile.pricing.sales',
            })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <GenericField
                name="pricing.buyFrom"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.pricing.buy_from',
                })}
                InputProps={{ endAdornment: <EuroIcon /> }}
                disabled={!isEditing}
                type="number"
              />
            </Grid>
            <Grid item xs={4}>
              <GenericField
                name="pricing.buyTo"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.pricing.buy_to',
                })}
                InputProps={{ endAdornment: <EuroIcon /> }}
                disabled={!isEditing}
                type="number"
              />
            </Grid>
          </Grid>
          <Box mt={3} />
          <FormSubSectionHeader
            title={formatMessage({
              id: 'crm.details.personal_information_match_profile.pricing.rent',
            })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <GenericField
                name="pricing.rentFrom"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.pricing.rent_from',
                })}
                InputProps={{ endAdornment: <EuroIcon /> }}
                disabled={!isEditing}
                type="number"
              />
            </Grid>
            <Grid item xs={4}>
              <GenericField
                name="pricing.rentTo"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.pricing.rent_to',
                })}
                InputProps={{ endAdornment: <EuroIcon /> }}
                disabled={!isEditing}
                type="number"
              />
            </Grid>
            <Grid item xs={4}>
              <DropdownField
                name="pricing.rentFrequency"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.pricing.frequency',
                })}
                items={PaymentFrequencyTypes.map(type => ({
                  ...type,
                  label: formatMessage({ id: `dictionaries.frequency.${type.value}` }),
                }))}
                placeholder="crm.details.personal_information_match_profile.pricing.frequency.placeholder"
                disabled={!isEditing}
              />
            </Grid>
          </Grid>
          <Box mt={3} />
          <FormSubSectionHeader
            title={formatMessage({
              id: 'crm.details.personal_information_match_profile.pricing.preferred_rental_period',
            })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <RadioGroupField
            name="pricing.rentalPeriod"
            options={RentalPeriodTypes.map(type => ({
              ...type,
              label: formatMessage({ id: `dictionaries.period.${type.value}` }),
            }))}
            disabled={!isEditing}
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <DatePickerField
                name="pricing.preferredStartDate"
                label={formatMessage({
                  id: 'crm.details.personal_information_match_profile.pricing.preferred_start_date',
                })}
                disabled={!isEditing}
              />
            </Grid>
          </Grid>
        </>
      )}
    </FormSection>
  );
};

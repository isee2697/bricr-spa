import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { FormSubSectionHeader } from 'ui/molecules';
import { Box, Grid } from 'ui/atoms';
import { CheckboxField, GenericField, RadioGroupField } from 'form/fields';
import { PercentIcon } from 'ui/atoms/icons';
import { HomeSituationOptions, PersonRoleOptions, TypeOfEmploymentOptions } from '../dictionaries';

export const People = () => {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'settings.allocate_criteria.details.type_of_allocation' })}
      onOptionsClick={() => {}}
      isExpandable
      isInitExpanded
    >
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'settings.allocate_criteria.details.joint_income_calculation' })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <GenericField
                name="lowestIncomePercentage"
                label={formatMessage({ id: 'settings.allocate_criteria.details.lowest_income_percentage' })}
                disabled={!editing}
                InputProps={{ endAdornment: <PercentIcon /> }}
              />
            </Grid>
            <Grid item xs={4}>
              <GenericField
                name="incomeDistributionThreashold"
                label={formatMessage({ id: 'settings.allocate_criteria.details.income_distribution_threashold' })}
                disabled={!editing}
                InputProps={{ endAdornment: <PercentIcon /> }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <GenericField
                name="fictitiousIncomeCalculation"
                label={formatMessage({ id: 'settings.allocate_criteria.details.fictitious_income_calculation' })}
                disabled={!editing}
                InputProps={{ endAdornment: <PercentIcon /> }}
              />
            </Grid>
            <Grid item xs={4}>
              <GenericField
                name="includePensionIncome"
                label={formatMessage({ id: 'settings.allocate_criteria.details.include_pension_income' })}
                disabled={!editing}
                InputProps={{ endAdornment: <PercentIcon /> }}
              />
            </Grid>
          </Grid>
          <Box mt={2} />
          <FormSubSectionHeader
            title={formatMessage({ id: 'settings.allocate_criteria.details.first_person_from_couple' })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <GenericField
                name="availableCapitalCount"
                label={formatMessage({ id: 'settings.allocate_criteria.details.available_capital_count' })}
                disabled={!editing}
                InputProps={{ endAdornment: <PercentIcon /> }}
              />
            </Grid>
            <Grid item xs={4}>
              <GenericField
                name="deductMonthlyObligations"
                label={formatMessage({ id: 'settings.allocate_criteria.details.deduct_monthly_obligations' })}
                disabled={!editing}
                InputProps={{ endAdornment: <PercentIcon /> }}
              />
            </Grid>
          </Grid>
          <Box mt={2} />
          <FormSubSectionHeader
            title={formatMessage({ id: 'settings.allocate_criteria.details.second_person_from_couple' })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <GenericField
                name="availableCapitalCount"
                label={formatMessage({ id: 'settings.allocate_criteria.details.available_capital_count' })}
                disabled={!editing}
                InputProps={{ endAdornment: <PercentIcon /> }}
              />
            </Grid>
            <Grid item xs={4}>
              <GenericField
                name="deductMonthlyObligations"
                label={formatMessage({ id: 'settings.allocate_criteria.details.deduct_monthly_obligations' })}
                disabled={!editing}
                InputProps={{ endAdornment: <PercentIcon /> }}
              />
            </Grid>
          </Grid>
          <Box mt={2} />
          <FormSubSectionHeader title={formatMessage({ id: 'settings.allocate_criteria.details.personal' })} noBorder />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <GenericField
                name="minimalAgeFirstPersonCouple"
                label={formatMessage({ id: 'settings.allocate_criteria.details.minimal_age_first_person_couple' })}
                disabled={!editing}
              />
            </Grid>
            <Grid item xs={4}>
              <GenericField
                name="minimalAgePartner"
                label={formatMessage({ id: 'settings.allocate_criteria.details.minimal_age_partner' })}
                disabled={!editing}
              />
            </Grid>
          </Grid>
          <Box mt={2} />
          <FormSubSectionHeader
            title={formatMessage({ id: 'settings.allocate_criteria.details.home_situation' })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <RadioGroupField
            name="homeSituation"
            options={HomeSituationOptions.map(type => ({
              ...type,
              label: formatMessage({ id: `dictionaries.home_situation.${type.label}` }),
            }))}
            disabled={!editing}
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <GenericField
                name="numberOfAdults"
                label={formatMessage({ id: 'settings.allocate_criteria.details.number_of_adults' })}
                disabled={!editing}
              />
            </Grid>
            <Grid item xs={4}>
              <GenericField
                name="numberOfChildren"
                label={formatMessage({ id: 'settings.allocate_criteria.details.number_of_chidren' })}
                disabled={!editing}
              />
            </Grid>
          </Grid>

          <Box mt={2} />
          <FormSubSectionHeader
            title={formatMessage({
              id: 'settings.allocate_criteria.details.type_of_employment_first_person_in_couple',
            })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <RadioGroupField
            name="homeSituation"
            options={TypeOfEmploymentOptions.map(type => ({
              ...type,
              label: formatMessage({ id: `dictionaries.employment_type.${type.label}` }),
            }))}
            disabled={!editing}
          />

          <Box mt={2} />
          <FormSubSectionHeader
            title={formatMessage({
              id: 'settings.allocate_criteria.details.type_of_employment_second_person_in_couple',
            })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <RadioGroupField
            name="homeSituation"
            options={TypeOfEmploymentOptions.map(type => ({
              ...type,
              label: formatMessage({ id: `dictionaries.employment_type.${type.label}` }),
            }))}
            disabled={!editing}
          />

          <Box mt={2} />
          <FormSubSectionHeader
            title={formatMessage({ id: 'settings.allocate_criteria.details.assign_to_persons_with_role' })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <RadioGroupField
            name="homeSituation"
            options={PersonRoleOptions.map(type => ({
              ...type,
              label: formatMessage({ id: `dictionaries.person_role.${type.label}` }),
            }))}
            disabled={!editing}
          />
          <Box mt={3} />
          <CheckboxField
            name="assignCalculatedMaximumJointIncome"
            label={formatMessage({
              id: 'settings.allocate_criteria.details.assign_people_above_the_calculated_maximum_joint_income',
            })}
          />
        </AutosaveForm>
      )}
    </FormSection>
  );
};

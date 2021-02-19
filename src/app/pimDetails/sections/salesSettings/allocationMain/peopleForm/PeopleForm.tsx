import React from 'react';

import { Grid, Box } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { FormSubSectionHeader } from 'ui/molecules';
import { CheckboxField, GenericField, RadioGroupField } from 'form/fields';
import { requireValidator } from 'form/validators';
import { useStyles } from 'app/pimDetails/sections/general/generalMain/GeneralMain.styles';
import { PercentIcon } from 'ui/atoms/icons';

import { rolesCheckboxes, employementCheckboxes, homeSituationCheckboxes } from './dictionaries';

export const PeopleForm = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'pim_details.sales_settings.people.title' })}
        isExpandable
        isInitExpanded={false}
      >
        {editing => (
          <Grid className={classes.textFields} container spacing={3}>
            <Grid item xs={12}>
              <Box mb={4}>
                <Box mb={3} px={2}>
                  <FormSubSectionHeader
                    noBorder
                    title={formatMessage({ id: 'pim_details.sales_settings.joint_income_calculation' })}
                  />
                </Box>
                <Box px={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <GenericField
                        name="people.jointIncome.lowestPercentage"
                        label="pim_details.sales_settings.people.lowest_income_percent"
                        placeholder="pim_details.sales_settings.people.lowest_income_percent_placeholder"
                        type="number"
                        validate={[requireValidator]}
                        disabled={!editing}
                        InputProps={{
                          endAdornment: <PercentIcon />,
                        }}
                      />
                      <GenericField
                        name="people.jointIncome.distributionThreshold"
                        label="pim_details.sales_settings.people.income_distribution"
                        placeholder="pim_details.sales_settings.people.income_distribution_placeholder"
                        type="number"
                        validate={[requireValidator]}
                        disabled={!editing}
                        InputProps={{
                          endAdornment: <PercentIcon />,
                        }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <GenericField
                        name="people.jointIncome.ficitousCalculation"
                        label="pim_details.sales_settings.people.fictitious_income_calculation"
                        placeholder="pim_details.sales_settings.people.fictitious_income_calculation_placeholder"
                        type="number"
                        validate={[requireValidator]}
                        disabled={!editing}
                        InputProps={{
                          endAdornment: <PercentIcon />,
                        }}
                      />
                      <GenericField
                        name="people.jointIncome.includePension"
                        label="pim_details.sales_settings.people.include_pension_income"
                        placeholder="pim_details.sales_settings.people.include_pension_income_placeholder"
                        type="number"
                        validate={[requireValidator]}
                        disabled={!editing}
                        InputProps={{
                          endAdornment: <PercentIcon />,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box mb={4}>
                <Box mb={3} px={2}>
                  <FormSubSectionHeader
                    noBorder
                    title={formatMessage({ id: 'pim_details.sales_settings.people.first_person' })}
                  />
                </Box>
                <Box px={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <GenericField
                        name="people.income.availableCapitalCount"
                        label="pim_details.sales_settings.people.capital_count_1"
                        placeholder="pim_details.sales_settings.people.capital_count_1_placeholder"
                        type="number"
                        validate={[requireValidator]}
                        disabled={!editing}
                        InputProps={{
                          endAdornment: <PercentIcon />,
                        }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <GenericField
                        name="people.income.deductMonthlyObligations"
                        label="pim_details.sales_settings.people.montly_obligation_1"
                        placeholder="pim_details.sales_settings.people.montly_obligation_1_placeholder"
                        type="number"
                        validate={[requireValidator]}
                        disabled={!editing}
                        InputProps={{
                          endAdornment: <PercentIcon />,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box mb={4}>
                <Box mb={3} px={2}>
                  <FormSubSectionHeader
                    noBorder
                    title={formatMessage({ id: 'pim_details.sales_settings.people.second_person' })}
                  />
                </Box>
                <Box px={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <GenericField
                        name="people.partnerIncome.availableCapitalCount"
                        label="pim_details.sales_settings.people.capital_count_2"
                        placeholder="pim_details.sales_settings.people.capital_count_2_placeholder"
                        type="number"
                        validate={[requireValidator]}
                        disabled={!editing}
                        InputProps={{
                          endAdornment: <PercentIcon />,
                        }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <GenericField
                        name="people.partnerIncome.deductMonthlyObligations"
                        label="pim_details.sales_settings.people.montly_obligation_2"
                        placeholder="pim_details.sales_settings.people.montly_obligation_2_placeholder"
                        type="number"
                        validate={[requireValidator]}
                        disabled={!editing}
                        InputProps={{
                          endAdornment: <PercentIcon />,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box mb={4}>
                <Box mb={3} px={2}>
                  <FormSubSectionHeader
                    noBorder
                    title={formatMessage({ id: 'pim_details.sales_settings.people.personal' })}
                  />
                </Box>
                <Box px={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <GenericField
                        name="people.income.minAge"
                        label="pim_details.sales_settings.people.min_age_first_person"
                        placeholder="pim_details.sales_settings.people.min_age_first_person_placeholder"
                        type="number"
                        validate={[requireValidator]}
                        disabled={!editing}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <GenericField
                        name="people.partnerIncome.minAge"
                        label="pim_details.sales_settings.people.min_age_partner"
                        placeholder="pim_details.sales_settings.people.min_age_partner_placeholder"
                        type="number"
                        validate={[requireValidator]}
                        disabled={!editing}
                        InputProps={{
                          endAdornment: <PercentIcon />,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box mb={4}>
                <Box mb={3} px={2}>
                  <FormSubSectionHeader
                    noBorder
                    title={formatMessage({ id: 'pim_details.sales_settings.people.home_situation' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
                  />
                </Box>
                <Box mb={2} px={2}>
                  <RadioGroupField
                    validate={[() => ({ id: 'common.error' })]}
                    name="home.situation"
                    options={homeSituationCheckboxes.map(type => ({
                      ...type,
                      label: formatMessage({ id: `dictionaries.homeSituation.${type.label}` }),
                    }))}
                    disabled={!editing}
                  />
                </Box>

                <Box mb={2} px={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <GenericField
                        name="home.amountAdults"
                        label="pim_details.sales_settings.people.number_of_adults"
                        placeholder="pim_details.sales_settings.people.number_of_adults_placeholder"
                        type="number"
                        validate={[requireValidator]}
                        disabled={!editing}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <GenericField
                        name="home.amountChildren"
                        label="pim_details.sales_settings.people.number_of_children"
                        placeholder="pim_details.sales_settings.people.number_of_children_placeholder"
                        type="number"
                        validate={[requireValidator]}
                        disabled={!editing}
                        InputProps={{
                          endAdornment: <PercentIcon />,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box mb={4} px={2}>
                <Box mb={2}>
                  <CheckboxField
                    name="home.hasCurrentResidence"
                    label="pim_details.sales_settings.people.residence"
                    disabled={!editing}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box mb={4}>
                <Box mb={3} px={2}>
                  <FormSubSectionHeader
                    noBorder
                    title={formatMessage({ id: 'pim_details.sales_settings.people.employment_first_person' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                  />
                </Box>
                <Box px={2}>
                  <RadioGroupField
                    validate={[() => ({ id: 'common.error' })]}
                    name="people.income.employementType"
                    options={employementCheckboxes.map(type => ({
                      ...type,
                      label: formatMessage({ id: `dictionaries.employment.${type.label}` }),
                    }))}
                    disabled={!editing}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box mb={4}>
                <Box mb={3} px={2}>
                  <FormSubSectionHeader
                    noBorder
                    title={formatMessage({ id: 'pim_details.sales_settings.people.employment_second_person' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                  />
                </Box>
                <Box px={2}>
                  <RadioGroupField
                    validate={[() => ({ id: 'common.error' })]}
                    name="people.partnerIncome.employementType"
                    options={employementCheckboxes.map(type => ({
                      ...type,
                      label: formatMessage({ id: `dictionaries.employment.${type.label}` }),
                    }))}
                    disabled={!editing}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box mb={4}>
                <Box mb={3} px={2}>
                  <FormSubSectionHeader
                    noBorder
                    title={formatMessage({ id: 'pim_details.sales_settings.people.persons_role' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                  />
                </Box>
                <Box mb={2} px={2}>
                  <RadioGroupField
                    validate={[() => ({ id: 'common.error' })]}
                    name="assignToRole"
                    options={rolesCheckboxes.map(type => ({
                      ...type,
                      label: formatMessage({ id: `dictionaries.roles.${type.label}` }),
                    }))}
                    disabled={!editing}
                  />
                </Box>
                <Box px={2}>
                  <CheckboxField
                    name="assign_max_calculated_joint_income"
                    label="pim_details.sales_settings.criteria_type.assign_max_calculated_joint_income"
                    disabled={!editing}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        )}
      </FormSection>
    </>
  );
};

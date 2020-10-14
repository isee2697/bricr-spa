import React from 'react';

import { Grid, Box } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { FormSubSectionHeader } from 'ui/molecules';
import { CheckboxGroupField, GenericField } from 'form/fields';
import { requireValidator } from 'form/validators';
import { useStyles } from 'app/pimDetails/sections/general/generalMain/GeneralMain.styles';
import { PercentIcon, SquareIcon } from 'ui/atoms/icons';

const homeSituationCheckboxes = [
  {
    label: 'dictionaries.homeSituation.LivingIn',
    icon: <SquareIcon color="inherit" />,
    value: 'LivingIn',
  },
  {
    label: 'dictionaries.homeSituation.OwnerOccupiedHome',
    icon: <SquareIcon color="inherit" />,
    value: 'OwnerOccupiedHome',
  },
  {
    label: 'dictionaries.homeSituation.SocialHousing',
    icon: <SquareIcon color="inherit" />,
    value: 'SocialHousing',
  },
  {
    label: 'dictionaries.homeSituation.FreeSectorRentalHome',
    icon: <SquareIcon color="inherit" />,
    value: 'FreeSectorRentalHome',
  },
];

export const PeopleForm = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'pim_details.sales_settings.people.title' })}
        isExpandable
        isInitExpanded={true} // TODO: should be false
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
                        name="lowest_income_percent"
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
                        name="income_distribution"
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
                        name="fictitious_income_calculation"
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
                        name="include_pension_income"
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
                        name="capital_count_1"
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
                        name="montly_obligation_1"
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
                        name="capital_count_2"
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
                        name="montly_obligation_2"
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
                        name="min_age_first_person"
                        label="pim_details.sales_settings.people.min_age_first_person"
                        placeholder="pim_details.sales_settings.people.min_age_first_person_placeholder"
                        type="number"
                        validate={[requireValidator]}
                        disabled={!editing}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <GenericField
                        name="min_age_partner"
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
                  <CheckboxGroupField
                    validate={[() => ({ id: 'common.error' })]}
                    name="home_situation"
                    options={homeSituationCheckboxes}
                  />
                </Box>

                <Box mb={2} px={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <GenericField
                        name="number_of_adults"
                        label="pim_details.sales_settings.people.number_of_adults"
                        placeholder="pim_details.sales_settings.people.number_of_adults_placeholder"
                        type="number"
                        validate={[requireValidator]}
                        disabled={!editing}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <GenericField
                        name="number_of_children"
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

            {/* TODO add current residence search */}

            <Grid item xs={12}>
              <Box mb={4}>
                <Box mb={3} px={2}>
                  <FormSubSectionHeader
                    noBorder
                    title={formatMessage({ id: 'pim_details.sales_settings.people.employment_first_person' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                  />
                </Box>
                <Box mb={2} px={2}>
                  <CheckboxGroupField
                    validate={[() => ({ id: 'common.error' })]}
                    name="employment_type_1"
                    options={homeSituationCheckboxes}
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

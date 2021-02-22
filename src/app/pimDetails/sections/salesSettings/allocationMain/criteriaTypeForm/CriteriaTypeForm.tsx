import React from 'react';

import { CheckboxField, CheckboxGroupField, DatePickerField, GenericField, QuantityField } from 'form/fields';
import { Grid, Box } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { requireValidator } from 'form/validators';
import { useLocale } from 'hooks';
import { HomeIcon } from 'ui/atoms/icons/home/HomeIcon';
import { useStyles } from 'app/pimDetails/sections/general/generalMain/GeneralMain.styles';
import { FormSubSectionHeader } from 'ui/molecules';
import { ReorderableList } from '../reorderableList/ReorderableList';

const allocationCheckboxes = [
  {
    label: 'dictionaries.allocation.Allocation',
    icon: <HomeIcon color="inherit" />,
    value: 'Allocation',
  },
  {
    label: 'dictionaries.allocation.MatchProfile',
    icon: <HomeIcon color="inherit" />,
    value: 'MatchProfile',
  },
];

export const CriteriaTypeForm = ({ formClassName }: { formClassName?: string }) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'pim_details.sales_settings.criteria_type.title' })}
        isExpandable
        isInitExpanded={true} // TODO set to false
        className={formClassName}
      >
        {editing => (
          <Grid className={classes.textFields} container spacing={3}>
            <Grid item xs={12}>
              <Box mb={4}>
                <Box mb={3} px={2}>
                  <FormSubSectionHeader
                    noBorder
                    title={formatMessage({ id: 'pim_details.sales_settings.select_one_type' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                  />
                </Box>
                <Box px={2}>
                  <CheckboxGroupField
                    validate={[() => ({ id: 'common.error' })]}
                    name="type"
                    options={allocationCheckboxes}
                    disabled={!editing}
                  />
                </Box>
              </Box>

              <Box mb={4}>
                <Box px={2}>
                  <GenericField
                    name="note"
                    label="pim_details.sales_settings.criteria_type.note"
                    placeholder="pim_details.sales_settings.criteria_type.note_placeholder"
                    validate={[requireValidator]}
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
                    title={formatMessage({ id: 'pim_details.sales_settings.activity_period' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                  />
                </Box>
                <Box px={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <DatePickerField
                        name="criteria.startDate"
                        label="pim_details.sales_settings.criteria_type.start_date"
                        disabled={!editing}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <DatePickerField
                        name="criteria.endDate"
                        label="pim_details.sales_settings.criteria_type.end_date"
                        disabled={!editing}
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
                    title={formatMessage({ id: 'pim_details.sales_settings.assigned_candidates' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_assigned_candidates' })}
                  />
                </Box>
                <Box px={2}>
                  <Grid item xs={3}>
                    <QuantityField
                      name="criteria.amountAssignedCandidates"
                      label="pim_details.sales_settings.criteria_type.assigned_candidates"
                      min={0}
                      max={99}
                      disabled={!editing}
                    />
                  </Grid>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box mb={4}>
                <Box mb={3} px={2}>
                  <FormSubSectionHeader
                    noBorder
                    title={formatMessage({ id: 'pim_details.sales_settings.rental_price' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                  />
                </Box>
                <Box px={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <GenericField
                        name="criteria.rentalePriceCalculation.minJointIncome"
                        label="pim_details.sales_settings.criteria_type.min_anual_income"
                        placeholder="pim_details.sales_settings.criteria_type.min_anual_income_placeholder"
                        validate={[requireValidator]}
                        type="number"
                        disabled={!editing}
                      />
                      <GenericField
                        name="criteria.rentalePriceCalculation.maxJointIncome"
                        label="pim_details.sales_settings.criteria_type.max_anual_income"
                        placeholder="pim_details.sales_settings.criteria_type.max_anual_income_placeholder"
                        validate={[requireValidator]}
                        type="number"
                        disabled={!editing}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <GenericField
                        name="criteria.rentalePriceCalculation.minRentByIncome"
                        label="pim_details.sales_settings.criteria_type.min_month_income"
                        placeholder="pim_details.sales_settings.criteria_type.min_month_income_placeholder"
                        validate={[requireValidator]}
                        type="number"
                        disabled={!editing}
                      />
                      <GenericField
                        name="criteria.rentalePriceCalculation.maxRentByIcome"
                        label="pim_details.sales_settings.criteria_type.max_month_income"
                        placeholder="pim_details.sales_settings.criteria_type.max_month_income_placeholder"
                        validate={[requireValidator]}
                        type="number"
                        disabled={!editing}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box mb={4}>
                <Box px={2}>
                  <CheckboxField
                    name="criteria.isPublishedExternally"
                    label="pim_details.sales_settings.published_externally"
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
                    title={formatMessage({ id: 'pim_details.sales_settings.interest_details' })}
                  />
                </Box>
                <Box mb={2} px={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <GenericField
                        name="criteria.interestDetails.minNumberOfPreferences"
                        label="pim_details.sales_settings.criteria_type.min_preferenc_interest"
                        placeholder="pim_details.sales_settings.criteria_type.min_preferenc_interest_placeholder"
                        type="number"
                        validate={[requireValidator]}
                        disabled={!editing}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <DatePickerField
                        name="criteria.interestDetails.registrationForm"
                        label="pim_details.sales_settings.criteria_type.registration_from"
                        disabled={!editing}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <DatePickerField
                        name="criteria.interestDetails.registrationTo"
                        label="pim_details.sales_settings.criteria_type.registration_to"
                        disabled={!editing}
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Box px={2}>
                  <CheckboxField
                    name="criteria.interestDetails.assignOnlyWithInterest"
                    label="pim_details.sales_settings.criteria_type.assign_to_people_with_property"
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
                    title={formatMessage({ id: 'pim_details.sales_settings.number_of_missing_document' })}
                  />
                </Box>
                <Box mb={2} px={2}>
                  <Grid item xs={3}>
                    <QuantityField
                      name="criteria.documents.acceptedMissingDocumentsNumber"
                      label="pim_details.sales_settings.criteria_type.number_of_missing_documents"
                      min={0}
                      max={99}
                      disabled={!editing}
                    />
                  </Grid>
                </Box>
                <Box px={2}>
                  <CheckboxField
                    name="criteria.documents.onlyAcceptedDocuments"
                    label="pim_details.sales_settings.criteria_type.only_accepted_documents"
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
                    title={formatMessage({ id: 'pim_details.sales_settings.criteria_order' })}
                    subtitle={formatMessage({ id: 'pim_details.drag_and_drop_order' })}
                  />
                </Box>
                <Box px={2}>
                  <ReorderableList />
                </Box>
              </Box>
            </Grid>
          </Grid>
        )}
      </FormSection>
    </>
  );
};

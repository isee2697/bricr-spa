import React, { useState } from 'react';

import { CheckboxField, CheckboxGroupField, DatePickerField, GenericField, QuantityField } from 'form/fields';
import { Grid, Box, Menu } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { requireValidator } from 'form/validators';
import { useLocale } from 'hooks';
import { useStyles } from 'app/pimDetails/sections/general/generalMain/GeneralMain.styles';
import { FormSubSectionHeader } from 'ui/molecules';
import { ReorderableList } from '../reorderableList/ReorderableList';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { DeleteIcon } from 'ui/atoms/icons';

import { CriteriaTypeFormProps } from './CriteriaTypeForm.types';
import { allocateTypeCheckboxes } from './dictionaries';

export const CriteriaTypeForm = ({ formClassName, onDelete }: CriteriaTypeFormProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'pim_details.sales_settings.criteria_type.title' })}
        isExpandable
        isInitExpanded={true} // TODO set to false
        className={formClassName}
        onOptionsClick={onMenuClick}
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
                    name="criteria.type"
                    options={allocateTypeCheckboxes.map(type => ({
                      ...type,
                      label: formatMessage({ id: `dictionaries.allocate_type.${type.label}` }),
                    }))}
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
      <Menu
        id="allocate-criteria-form-menu"
        open={Boolean(menuEl)}
        onClose={onMenuClose}
        anchorEl={menuEl}
        placement="bottom-end"
      >
        <ListOptionsMenuItem
          title={formatMessage({
            id: 'common.delete',
          })}
          onClick={() => {
            !!onDelete && onDelete();
            onMenuClose();
          }}
          icon={<DeleteIcon color="secondary" />}
          color="secondary"
        />
      </Menu>
    </>
  );
};

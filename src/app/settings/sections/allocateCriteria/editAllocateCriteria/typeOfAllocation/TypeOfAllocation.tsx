import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useLocale } from 'hooks';
import { Box, Grid, Typography } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { EuroIcon } from 'ui/atoms/icons';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { CheckboxField, DatePickerField, GenericField, QuantityField, RadioGroupField } from 'form/fields';
import { AllocateCriteriaTypes } from '../../addAllocateCriteria/dictionaries';
import { CriteriaOrder } from 'api/types';
import { SortCriteriaItem } from 'app/pimDetails/sections/allocateResults/createWizard/sortingStep/SortCriteriaItem';
import { useStyles } from '../EditAllocateCriteria.styles';
import { YesNoOptions } from '../dictionaries';

export const TypeOfAllocation = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [sortCriteriaItems, setSortCriteriaItems] = useState(Object.keys(CriteriaOrder));

  const handleUpdateSortCriteriaOrder = (value: string, position: number) => {
    const currentPosition = sortCriteriaItems.findIndex(item => item === value);
    const items = [...sortCriteriaItems];
    items.splice(currentPosition, 1);
    items.splice(position, 0, value);
    setSortCriteriaItems([...items]);
  };

  return (
    <FormSection
      title={formatMessage({ id: 'settings.allocate_criteria.details.type_of_allocation' })}
      onOptionsClick={() => {}}
      isExpandable
      isInitExpanded
    >
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          <GenericField
            name="title"
            label="settings.allocate_criteria.details.title"
            placeholder="settings.allocate_criteria.details.title.placeholder"
            size="medium"
            disabled={!editing}
          />
          <Box mt={2} />
          <FormSubSectionHeader
            title={formatMessage({ id: 'settings.allocate_criteria.details.select_type_of_property' })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <RadioGroupField
            name="typeOfProperty"
            options={AllocateCriteriaTypes.map(type => ({
              ...type,
              label: formatMessage({ id: `dictionaries.allocate_criteria_type.${type.label}` }),
            }))}
            disabled={!editing}
          />
          <Box mt={2} />
          <GenericField
            name="note"
            label="settings.allocate_criteria.details.note"
            placeholder="settings.allocate_criteria.details.note.placeholder"
            size="medium"
            disabled={!editing}
          />
          <Box mt={4} />
          <FormSubSectionHeader
            title={formatMessage({ id: 'settings.allocate_criteria.details.criteria_activity_period' })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <DatePickerField
                name="startDate"
                label={formatMessage({ id: 'settings.allocate_criteria.details.start_date' })}
                disabled={!editing}
              />
            </Grid>
            <Grid item xs={4}>
              <DatePickerField
                name="endDate"
                label={formatMessage({ id: 'settings.allocate_criteria.details.end_date' })}
                disabled={!editing}
              />
            </Grid>
          </Grid>
          <Box mt={4} />
          <FormSubSectionHeader
            title={formatMessage({ id: 'settings.allocate_criteria.details.candidates_assigned_per_property' })}
            subtitle={formatMessage({ id: 'settings.allocate_criteria.details.provide_amount_of_candidates' })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <QuantityField name="people" label={formatMessage({ id: 'common.people' })} disabled={!editing} />
            </Grid>
          </Grid>
          <Box mt={4} />
          <FormSubSectionHeader
            title={formatMessage({ id: 'settings.allocate_criteria.details.rental_price_calculation' })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <GenericField
                name="jointAnnualIncomeMin"
                label={formatMessage(
                  { id: 'settings.allocate_criteria.details.joint_annual_income' },
                  {
                    property: (
                      <Typography variant="h5" className={classes.fontWeightBold}>
                        {formatMessage({ id: 'common.min' })}
                      </Typography>
                    ),
                  },
                )}
                disabled={!editing}
                InputProps={{ endAdornment: <EuroIcon /> }}
              />
            </Grid>
            <Grid item xs={4}>
              <GenericField
                name="monthlyRentMin"
                label={formatMessage(
                  { id: 'settings.allocate_criteria.details.monthly_rent' },
                  {
                    property: (
                      <Typography variant="h5" className={classes.fontWeightBold}>
                        {formatMessage({ id: 'common.min' })}
                      </Typography>
                    ),
                  },
                )}
                disabled={!editing}
                InputProps={{ endAdornment: <EuroIcon /> }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <GenericField
                name="jointAnnualIncomeMax"
                label={formatMessage(
                  { id: 'settings.allocate_criteria.details.joint_annual_income' },
                  {
                    property: (
                      <Typography variant="h5" className={classes.fontWeightBold}>
                        {formatMessage({ id: 'common.max' })}
                      </Typography>
                    ),
                  },
                )}
                disabled={!editing}
                InputProps={{ endAdornment: <EuroIcon /> }}
              />
            </Grid>
            <Grid item xs={4}>
              <GenericField
                name="monthlyRentMax"
                label={formatMessage(
                  { id: 'settings.allocate_criteria.details.monthly_rent' },
                  {
                    property: (
                      <Typography variant="h5" className={classes.fontWeightBold}>
                        {formatMessage({ id: 'common.max' })}
                      </Typography>
                    ),
                  },
                )}
                disabled={!editing}
                InputProps={{ endAdornment: <EuroIcon /> }}
              />
            </Grid>
          </Grid>
          <Box mt={2} />
          <FormSubSectionHeader
            title={formatMessage({ id: 'settings.allocate_criteria.details.is_property_published_externally' })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
            noBorder
          />
          <RadioGroupField
            name="publishedExternally"
            options={YesNoOptions.map(type => ({
              ...type,
              label: formatMessage({ id: `common.${type.label}` }),
            }))}
            disabled={!editing}
          />
          <Box mt={4} />
          <FormSubSectionHeader
            title={formatMessage({ id: 'settings.allocate_criteria.details.interest_details' })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <GenericField
                name="preferenceInterestMin"
                label={formatMessage(
                  { id: 'settings.allocate_criteria.details.preference_interest_number' },
                  {
                    property: (
                      <Typography variant="h5" className={classes.fontWeightBold}>
                        {formatMessage({ id: 'common.min' })}
                      </Typography>
                    ),
                  },
                )}
                disabled={!editing}
              />
            </Grid>
            <Grid item xs={4}>
              <DatePickerField
                name="registrationFrom"
                label={formatMessage({ id: 'settings.allocate_criteria.details.registration_from' })}
                disabled={!editing}
              />
            </Grid>
            <Grid item xs={4}>
              <DatePickerField
                name="registrationTo"
                label={formatMessage({ id: 'settings.allocate_criteria.details.registration_to' })}
                disabled={!editing}
              />
            </Grid>
          </Grid>
          <Box mt={3} />
          <CheckboxField
            name="assignOnlyPeopleWithInterest"
            label={formatMessage({
              id: 'settings.allocate_criteria.details.assign_only_people_with_property_interest',
            })}
          />
          <Box mt={4} />
          <FormSubSectionHeader
            title={formatMessage({
              id: 'settings.allocate_criteria.details.accepted_number_of_missing_documents',
            })}
            noBorder
          />
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <QuantityField name="documents" label={formatMessage({ id: 'common.documents' })} disabled={!editing} />
            </Grid>
          </Grid>
          <Box mt={3} />
          <CheckboxField
            name="onlyAcceptedDocuments"
            label={formatMessage({
              id: 'settings.allocate_criteria.details.only_accepted_documents',
            })}
          />
          <Box mt={4} />
          <FormSubSectionHeader
            title={formatMessage({
              id: 'settings.allocate_criteria.details.sort_criteria',
            })}
            subtitle={formatMessage({ id: 'common.drag_drop_in_preferred_order' })}
            noBorder
          />
          <DndProvider backend={HTML5Backend}>
            {sortCriteriaItems.map((sortCriteria, index) => (
              <SortCriteriaItem
                sortCriteria={sortCriteria}
                index={index}
                disabled={!editing}
                onUpdateItemOrder={handleUpdateSortCriteriaOrder}
              />
            ))}
          </DndProvider>
        </AutosaveForm>
      )}
    </FormSection>
  );
};

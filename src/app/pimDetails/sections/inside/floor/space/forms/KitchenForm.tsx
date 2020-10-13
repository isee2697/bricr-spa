import React from 'react';
import { FormSubSectionHeader } from 'ui/molecules';
import { Grid, Box } from 'ui/atoms';
import { GenericField, RadioGroupField, CheckboxGroupField, DatePickerField } from 'form/fields';
import { useLocale } from 'hooks';
import { AppliancesField } from '../appliancesField/AppliancesField';
import { SpaceFormProps } from '../Space.types';
import * as dictionaries from '../dictionaries';

export const KitchenForm = ({ fieldPrefix, isEditMode }: SpaceFormProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <Grid item xs={12}>
        <FormSubSectionHeader noBorder title={formatMessage({ id: 'pim_details.inside.general_information' })} />
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <DatePickerField
              name={`${fieldPrefix}.constructionYear`}
              label="pim_details.inside.year_of_construction"
              placeholder="pim_details.inside.year_of_construction_placeholder"
              disabled={!isEditMode}
              isYearPicker
            />
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={6}>
            <Box display="flex" alignItems="flex-end" height="100%">
              <GenericField
                name={`${fieldPrefix}.notes`}
                label="pim_details.inside.notes"
                placeholder="pim_details.inside.space_notes_placeholder"
                size="medium"
                disabled={!isEditMode}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <FormSubSectionHeader
          noBorder
          title={formatMessage({ id: 'pim_details.inside.type_of_kitchen' })}
          subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
        />
        <Box paddingTop={2}>
          <RadioGroupField
            disabled={!isEditMode}
            xs={4}
            lg={2}
            name={`${fieldPrefix}.type`}
            options={dictionaries.kitchenType}
          />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <FormSubSectionHeader
          noBorder
          title={formatMessage({ id: 'pim_details.inside.type_of_construction' })}
          subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
        />
        <Box paddingTop={2} paddingLeft={2}>
          <CheckboxGroupField
            disabled={!isEditMode}
            xs={2}
            name={`${fieldPrefix}.constructionType`}
            options={dictionaries.kitchenConstruction}
          />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <FormSubSectionHeader
          noBorder
          title={formatMessage({ id: 'pim_details.inside.services' })}
          subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
        />
        <Box paddingTop={2} paddingLeft={2}>
          <CheckboxGroupField
            disabled={!isEditMode}
            xs={2}
            lg={1}
            name={`${fieldPrefix}.services`}
            options={dictionaries.kitchenService}
          />
        </Box>
        <GenericField
          name={`${fieldPrefix}.servicesNotes`}
          label="pim_details.inside.notes"
          placeholder="pim_details.inside.notes_placeholder"
          size="medium"
          disabled={!isEditMode}
        />
      </Grid>

      <Grid item xs={12}>
        <FormSubSectionHeader
          noBorder
          title={formatMessage({ id: 'pim_details.inside.built_in_appliances' })}
          subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
        />
        <AppliancesField
          disabled={!isEditMode}
          options={dictionaries.kitchenAppliances}
          name={`${fieldPrefix}.appliances`}
        />
      </Grid>

      <Grid item xs={12}>
        <FormSubSectionHeader
          noBorder
          title={formatMessage({ id: 'pim_details.inside.hob' })}
          subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
        />
        <Box paddingTop={2}>
          <RadioGroupField
            disabled={!isEditMode}
            sm={3}
            md={2}
            name={`${fieldPrefix}.hob`}
            options={dictionaries.kitchenHob}
          />
        </Box>
      </Grid>
    </>
  );
};

import React from 'react';

import { FormSection } from 'ui/organisms';
import { FormSubSection } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Grid, Box, Typography } from 'ui/atoms';
import { GenericField, DatePickerField, CheckboxGroupField } from 'form/fields';

import { windowTypes } from './dictionaries';
export const InsideGeneral = () => {
  const { formatMessage } = useLocale();

  return (
    <Grid item xs={12}>
      <Typography variant="h1">{formatMessage({ id: `pim_details.inside.general.title` })}</Typography>
      <GenericField placeholder="pim_details.inside.general.notes_placeholder" name="notes" />
      <Box mb={3}></Box>
      <FormSection
        title={formatMessage({ id: 'pim_details.inside.general.renovation_extension_title' })}
        isExpandable
        isInitExpanded={false}
        isEditable={true}
      >
        {isEditing => (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <DatePickerField
                label="pim_details.inside.general.renovation_year"
                placeholder="pim_details.inside.general.renovation_year"
                disabled={!isEditing}
                format="yyyy"
                name="renovation.yearOfRenovation"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericField
                label="pim_details.inside.general.renovation_notes"
                placeholder="pim_details.inside.general.renovation_notes_placeholder"
                disabled={!isEditing}
                name="renovation.notes"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DatePickerField
                label="pim_details.inside.general.extension_year"
                placeholder="pim_details.inside.general.extension_year"
                disabled={!isEditing}
                format="yyyy"
                name="extension.yearOfExtension"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <GenericField
                label="pim_details.inside.general.extension_notes"
                placeholder="pim_details.inside.general.extension_notes_placeholder"
                disabled={!isEditing}
                name="extension.notes"
              />
            </Grid>
          </Grid>
        )}
      </FormSection>

      <Box mb={3}></Box>
      <FormSection
        title={formatMessage({ id: 'pim_details.inside.general.windows_title' })}
        isExpandable
        isInitExpanded={false}
        isEditable={true}
      >
        {isEditing => (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormSubSection
                title={formatMessage({ id: 'pim_details.inside.general.windows_types' })}
                subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
              />
            </Grid>
            <Grid item xs={12}>
              <CheckboxGroupField disabled={!isEditing} xs={2} options={windowTypes} name="windows.types" />
            </Grid>
            <Grid item xs={12}>
              <GenericField
                disabled={!isEditing}
                label="pim_details.inside.general.windows_notes"
                placeholder="pim_details.inside.general.windows_notes_placeholder"
                name="windows.notes"
              />
            </Grid>
          </Grid>
        )}
      </FormSection>
    </Grid>
  );
};

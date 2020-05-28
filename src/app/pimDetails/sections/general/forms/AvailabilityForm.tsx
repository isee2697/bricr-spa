import React from 'react';
import { Field } from 'react-final-form';

import { Grid, Box } from 'ui/atoms';
import { GraphIcon, FilterIcon, CalendarIcon, BogIcon, CrmIcon } from 'ui/atoms/icons';
import { FormSubSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { GenericField, DatePickerField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { useStyles } from '../General.styles';
import { PropertyHabitation, PropertyAvailability } from 'api/types';

const AVAILABILITIES = [
  {
    label: 'dictionaries.availability.InConsultation',
    icon: <GraphIcon />,
    value: PropertyAvailability.InConsultation,
  },
  {
    label: 'dictionaries.availability.Immediatelly',
    icon: <FilterIcon />,
    value: PropertyAvailability.Immediatelly,
  },
  {
    label: 'dictionaries.availability.ByDate',
    icon: <CalendarIcon />,
    value: PropertyAvailability.ByDate,
  },
];

const HABITATIONS = [
  {
    label: 'dictionaries.habitation.RecreationalHome',
    icon: <BogIcon />,
    value: PropertyHabitation.RecreationalHome,
  },
  {
    label: 'dictionaries.habitation.PermanentOccupation',
    icon: <CrmIcon />,
    value: PropertyHabitation.PermanentOccupation,
  },
];

export const AvailabilityForm = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.general.availability.title' })}
      isExpandable
      isInitExpanded={false}
    >
      {editing => (
        <>
          <FormSubSection
            className={classes.subHeader}
            title={formatMessage({ id: 'pim_details.general.availability.title' })}
            subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
          />
          <Box mb={2} mt={2}>
            <Grid container spacing={1} className={classes.tilesContainer}>
              <RadioGroupField
                sm={3}
                options={AVAILABILITIES}
                name="houseGeneral.availability.availability"
                disabled={!editing}
              />
            </Grid>
          </Box>
          <Grid className={classes.textFields} container spacing={3}>
            <Field name="houseGeneral.availability.availability">
              {({ input }) =>
                input.value === PropertyAvailability.ByDate && (
                  <Grid item xs={4}>
                    <DatePickerField
                      name="houseGeneral.availability.from"
                      label="common.from"
                      placeholder="common.from_placeholder"
                      disabled={!editing}
                    />
                  </Grid>
                )
              }
            </Field>

            <Grid item xs={12}>
              <GenericField
                name="houseGeneral.availability.notes"
                label="common.notes"
                placeholder="common.notes_placeholder"
                disabled={!editing}
              />
            </Grid>
          </Grid>

          <FormSubSection
            className={classes.subHeader}
            title={formatMessage({ id: 'pim_details.general.availability.habitation' })}
            subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
          />
          <Box mb={2} mt={2}>
            <Grid container spacing={1} className={classes.tilesContainer}>
              <RadioGroupField
                sm={3}
                options={HABITATIONS}
                name="houseGeneral.availability.habitation"
                disabled={!editing}
              />
            </Grid>
          </Box>
          <Grid className={classes.textFields} container spacing={5}>
            <Grid item xs={5}>
              <GenericField
                name="houseGeneral.availability.currentUse"
                label="pim_details.general.availability.current_use"
                disabled={!editing}
                size="medium"
              />
            </Grid>
            <Grid item xs={5}>
              <GenericField
                name="houseGeneral.availability.currentDestination"
                label="pim_details.general.availability.current_destination"
                disabled={!editing}
                size="medium"
              />
            </Grid>
          </Grid>
        </>
      )}
    </FormSection>
  );
};

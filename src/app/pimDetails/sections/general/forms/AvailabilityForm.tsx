import React, { useState } from 'react';
import { Form } from 'react-final-form';

import { Grid, TileRadio } from 'ui/atoms';
import { GraphIcon, FilterIcon, CalendarIcon, BogIcon, CrmIcon } from 'ui/atoms/icons';
import { FormSubSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { GenericField, SelectField, DatePickerField } from 'form/fields';
import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';
import { useStyles } from '../General.styles';

const AVAILABILITIES = [
  {
    key: 'in_construction',
    icon: <GraphIcon />,
  },
  {
    key: 'immediatelly',
    icon: <FilterIcon />,
  },
  {
    key: 'by_date',
    icon: <CalendarIcon />,
  },
];

const HABITATIONS = [
  {
    key: 'recreational_home',
    icon: <BogIcon />,
  },
  {
    key: 'permanent_occupation',
    icon: <CrmIcon />,
  },
];

export const AvailabilityForm = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [availability, setAvailability] = useState('');
  const [habitation, setHabitation] = useState('');

  return (
    <FormSection title={formatMessage({ id: AppMessages['pim_details.general.availability.title'] })} isExpandable>
      {editing => (
        <Form onSubmit={() => {}}>
          {({ handleSubmit }) => (
            <>
              <FormSubSection
                className={classes.subHeader}
                title={formatMessage({
                  id: AppMessages['pim_details.general.availability.title'],
                })}
                subtitle={formatMessage({ id: AppMessages['pim_details.choose_one_option_below'] })}
              />
              <Grid container spacing={1} className={classes.tilesContainer}>
                {AVAILABILITIES.map(({ key, icon }) => (
                  <Grid item sm={3} md={2} key={key}>
                    <TileRadio
                      title={formatMessage({
                        id: `pim_details.general.availability.${key}`,
                      })}
                      onClick={() => setAvailability(key)}
                      isSelected={availability === key}
                      isDisabled={!editing}
                    >
                      {icon}
                    </TileRadio>
                  </Grid>
                ))}
              </Grid>
              <Grid className={classes.textFields} container spacing={3}>
                {availability === 'by_date' && (
                  <Grid item xs={4}>
                    <DatePickerField
                      name="street"
                      label="common.from"
                      placeholder="common.from_placeholder"
                      disabled={!editing}
                    />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <GenericField
                    name="city"
                    label="common.notes"
                    placeholder="common.notes_placeholder"
                    disabled={!editing}
                  />
                </Grid>
              </Grid>

              <FormSubSection
                className={classes.subHeader}
                title={formatMessage({
                  id: AppMessages['pim_details.general.availability.habitation'],
                })}
                subtitle={formatMessage({ id: AppMessages['pim_details.choose_one_option_below'] })}
              />
              <Grid container spacing={1} className={classes.tilesContainer}>
                {HABITATIONS.map(({ key, icon }) => (
                  <Grid item sm={3} md={2} key={key}>
                    <TileRadio
                      title={formatMessage({
                        id: `pim_details.general.availability.${key}`,
                      })}
                      onClick={() => setHabitation(key)}
                      isSelected={habitation === key}
                      isDisabled={!editing}
                    >
                      {icon}
                    </TileRadio>
                  </Grid>
                ))}
              </Grid>
              <Grid className={classes.textFields} container spacing={5}>
                <Grid item xs={5}>
                  <SelectField
                    name="currentUse"
                    label="pim_details.general.availability.current_use"
                    disabled={!editing}
                  />
                </Grid>
                <Grid item xs={5}>
                  <SelectField
                    name="currentDestination"
                    label="pim_details.general.availability.current_destination"
                    disabled={!editing}
                  />
                </Grid>
              </Grid>
            </>
          )}
        </Form>
      )}
    </FormSection>
  );
};

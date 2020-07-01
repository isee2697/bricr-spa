import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import { useLocale, useToogleOnNewlyCreated } from 'hooks';
import { Box } from 'ui/atoms';
import { LinkedPerson } from 'ui/molecules';
import { AutosaveForm, FormSubSection } from 'ui/organisms';
import { GenericField, DatePickerField } from 'form/fields';
import { useStyles } from '../Meters.styles';

import { ReadingProps } from './Reading.types';

export const Readings = ({ readings, editing, linkedPerson, onSave, isMeterAdded }: ReadingProps) => {
  const { formatMessage } = useLocale();
  const { meterType } = useParams<{ meterType: string }>();
  const [toggled, setToggled] = useState<string | undefined>();
  const classes = useStyles();
  const isElectricity = meterType === 'electric';

  const sorted = readings.slice().sort((a, b) => {
    return a.id.localeCompare(b.id);
  });

  useToogleOnNewlyCreated(sorted, setToggled);

  return (
    <>
      {sorted.map((reading, key) => (
        <AutosaveForm key={reading.id} initialValues={reading} onSave={onSave} subscription={{}}>
          <FormSubSection
            title={formatMessage({ id: 'pim_details.services.meter.section_subtitle' })}
            onOptionsClick={() => setToggled(v => (v !== reading.id ? reading.id : undefined))}
            isExpanded={reading.id === toggled || isMeterAdded}
            counter={key + 1}
            initiallyOpened={false}
          >
            <Grid container spacing={1}>
              <Grid item xs={isElectricity ? 4 : 6}>
                <Box display="flex" alignItems="flex-end" height="100%">
                  <GenericField
                    size="medium"
                    label="pim_details.services.meter.value"
                    placeholder="pim_details.services.meter.value_placeholder"
                    type="number"
                    name="value"
                    id={`value.${reading.id}`}
                    disabled={!editing}
                  />
                </Box>
              </Grid>
              <Grid item xs={isElectricity ? 4 : 6}>
                <Box display="flex" alignItems="flex-end" height="100%">
                  <DatePickerField
                    name="dateOfReading"
                    id={`date.${reading.id}`}
                    label="pim_details.services.meter.reading_date"
                    placeholder="pim_details.services.meter.id_placeholder"
                    size="medium"
                    disabled={!editing}
                  />
                </Box>
              </Grid>
              {isElectricity && (
                <Grid item xs={4}>
                  <Box display="flex" alignItems="flex-end" height="100%">
                    <GenericField
                      size="medium"
                      label="pim_details.services.meter.id"
                      placeholder="pim_details.services.meter.id"
                      name="feedInId"
                      id={`feed-in.${reading.id}`}
                      disabled={!editing}
                    />
                  </Box>
                </Grid>
              )}
              <Grid item xs={12}>
                <label className={classNames(classes.label, editing && classes.activeLabel)}>
                  {formatMessage({ id: 'pim_details.services.meter.reading_by_label' })}
                </label>
                <LinkedPerson
                  name={linkedPerson.name}
                  avatar={linkedPerson.avatar}
                  office={linkedPerson.office}
                  company={linkedPerson.company}
                  phone={linkedPerson.phone}
                  email={linkedPerson.email}
                  onChangeClick={linkedPerson.onChangeClick}
                />
              </Grid>
            </Grid>
          </FormSubSection>
        </AutosaveForm>
      ))}
    </>
  );
};

import React, { useState, useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Box, Collapse } from 'ui/atoms';
import { LinkedPerson, SubSectionHeader } from 'ui/molecules';
import { AutosaveForm } from 'ui/organisms';
import { GenericField, DatePickerField } from 'form/fields';
import { useStyles } from '../Meters.styles';

import { ReadingProps } from './Reading.types';

export const Readings = ({ readings, editing, linkedPerson, onSave }: ReadingProps) => {
  const isInitialMount = useRef(true);
  const { formatMessage } = useLocale();
  const { meterType } = useParams<{ meterType: string }>();
  const [toggled, setToggled] = useState<number | undefined>(0);
  const classes = useStyles();
  const isElectricity = meterType === 'electric';

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setToggled(readings.length - 1);
    }
  }, [readings]);

  return (
    <>
      {readings.map((reading, key) => (
        <AutosaveForm key={reading.id} initialValues={reading} onSave={onSave} subscription={{}}>
          <SubSectionHeader
            onOptionsClick={() => {}}
            onToggleClick={() => setToggled(v => (v !== key ? key : undefined))}
            toggled={key === toggled}
            counter={key + 1}
          >
            <Grid container alignItems="center">
              {formatMessage({ id: 'pim_details.services.meter.section_subtitle' })}
            </Grid>
          </SubSectionHeader>
          <Collapse in={key === toggled}>
            <Grid container spacing={1}>
              <Grid item xs={isElectricity ? 4 : 6}>
                <GenericField
                  size="medium"
                  label={formatMessage({ id: 'pim_details.services.meter.value' })}
                  placeholder={formatMessage({
                    id: 'pim_details.services.meter.value_placeholder',
                  })}
                  type="number"
                  name="value"
                  id={`value.${reading.id}`}
                  disabled={!editing}
                />
              </Grid>
              <Grid item xs={isElectricity ? 4 : 6}>
                <Box display="flex" alignItems="flex-end" height="100%">
                  <DatePickerField
                    name="dateOfReading"
                    id={`date.${reading.id}`}
                    label={formatMessage({ id: 'pim_details.services.meter.reading_date' })}
                    placeholder={formatMessage({
                      id: 'pim_details.services.meter.id_placeholder',
                    })}
                    size="medium"
                    disabled={!editing}
                  />
                </Box>
              </Grid>
              {isElectricity && (
                <Grid item xs={4}>
                  <GenericField
                    size="medium"
                    label={formatMessage({ id: 'pim_details.services.meter.id' })}
                    placeholder={formatMessage({
                      id: 'pim_details.services.meter.id',
                    })}
                    name="feedInId"
                    id={`feed-in.${reading.id}`}
                    disabled={!editing}
                  />
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
          </Collapse>
        </AutosaveForm>
      ))}
    </>
  );
};

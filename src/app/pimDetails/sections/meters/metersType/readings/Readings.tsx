import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { useLocale, useToggleOnNewlyCreatedFromArray } from 'hooks';
import { LinkedPerson } from 'ui/molecules';
import { AutosaveForm, FormSubSection } from 'ui/organisms';
import { GenericField, DatePickerField } from 'form/fields';
import { useStyles } from 'app/pimDetails/sections/meters/Meters.styles';

import { ReadingProps } from './Reading.types';

export const Readings = ({ readings, editing, linkedPerson, onSave, isMeterAdded }: ReadingProps) => {
  const { formatMessage } = useLocale();
  const { meterType } = useParams<{ meterType: string }>();
  const [toggled, setToggled] = useState<string | undefined>(isMeterAdded ? readings[0].id : undefined);
  const classes = useStyles();
  const isElectricity = meterType === 'electric';

  useToggleOnNewlyCreatedFromArray(readings, setToggled);

  return (
    <>
      {readings.map((reading, key) => (
        <AutosaveForm key={reading.id} initialValues={reading} onSave={onSave} subscription={{}}>
          <FormSubSection
            title={formatMessage({ id: 'pim_details.services.meter.section_subtitle' })}
            onExpand={() => setToggled(v => (v !== reading.id ? reading.id : undefined))}
            isExpanded={reading.id === toggled}
            counter={key + 1}
            initiallyOpened={false}
            onOptionsClick={() => {}}
          >
            <Grid container spacing={1}>
              <Grid item xs={isElectricity ? 4 : 6}>
                <GenericField
                  size="medium"
                  label="pim_details.services.meter.value"
                  placeholder="pim_details.services.meter.value_placeholder"
                  type="number"
                  name="value"
                  id={`value.${reading.id}`}
                  disabled={!editing}
                />
              </Grid>
              <Grid item xs={isElectricity ? 4 : 6}>
                <DatePickerField
                  name="dateOfReading"
                  id={`date.${reading.id}`}
                  label="pim_details.services.meter.reading_date"
                  placeholder="pim_details.services.meter.id_placeholder"
                  size="medium"
                  disabled={!editing}
                />
              </Grid>
              {isElectricity && (
                <Grid item xs={4}>
                  <GenericField
                    size="medium"
                    label="pim_details.services.meter.id"
                    placeholder="pim_details.services.meter.id"
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
          </FormSubSection>
        </AutosaveForm>
      ))}
    </>
  );
};

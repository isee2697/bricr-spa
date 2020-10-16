import React, { useState } from 'react';
import { DateTime } from 'luxon';
import { useForm } from 'react-final-form';

import { AppointmentRepeat } from 'api/types';
import { Button, Card, Grid, IconButton, Box, Typography, MenuItem } from 'ui/atoms';
import { CheckboxField, DatePickerChip, GenericField, SelectField, TimePickerChip } from 'form/fields';
import { useLocale } from 'hooks';
import { AddIcon, CloseIcon } from 'ui/atoms/icons';
import { useStyles } from 'app/calendar/new/cards/baseInfo/BaseInfo.styles';

type Term = {
  from: DateTime;
  to: DateTime;
};

export const AppointmentBaseInfoCard = () => {
  const form = useForm();
  const baseItem: Term = { from: DateTime.local().plus({ day: 1 }), to: DateTime.local().plus({ day: 1, hour: 1 }) };
  const [alternativeTerms, setAlternativeTerms] = useState(
    (form.getState().initialValues?.alternativeTerms as Term[]) ?? [baseItem],
  );
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const amountOfTerms = alternativeTerms.length;

  return (
    <Card>
      <GenericField
        name="name"
        label={formatMessage({ id: 'appointment.name.label' })}
        placeholder={formatMessage({ id: 'appointment.name.placeholder' })}
      />
      <Grid container>
        <Grid item>
          <CheckboxField name="isAllDay" label={formatMessage({ id: 'appointment.all_day.label' })} />
        </Grid>
        <Grid item className="right">
          <CheckboxField name="confirmedDate" label={formatMessage({ id: 'appointment.confirmed_date.label' })} />
        </Grid>
      </Grid>
      {alternativeTerms?.map((term, index) => (
        <Grid key={index} container spacing={3} className={classes.term}>
          <Grid item className={classes.item}>
            <Typography>{formatMessage({ id: 'appointment.from.label' })}</Typography>
            <DatePickerChip name={`alternativeTerms[${index}].from`} className={classes.date} />
            <TimePickerChip name={`alternativeTerms[${index}].from`} />
          </Grid>
          <Grid item className={classes.item}>
            <Box mr={1} />
            <Typography>{formatMessage({ id: 'appointment.to.label' })}</Typography>
            <DatePickerChip name={`alternativeTerms[${index}].to`} className={classes.date} />
            <TimePickerChip name={`alternativeTerms[${index}].to`} />
          </Grid>
          {amountOfTerms > 1 && (
            <Grid item className="right">
              <IconButton onClick={() => setAlternativeTerms(terms => terms.filter((__item, idx) => index !== idx))}>
                <CloseIcon />
              </IconButton>
            </Grid>
          )}
        </Grid>
      ))}

      <Grid container spacing={3} alignItems="center" className={classes.bottom}>
        <Grid item>
          <Button onClick={() => setAlternativeTerms(terms => [...terms, baseItem])}>
            <AddIcon /> {formatMessage({ id: 'appointment.alternative_term.label' })}
          </Button>
        </Grid>
        <Grid item className="right">
          <SelectField value={AppointmentRepeat.NoRepeat} className={classes.select} name="repeat">
            {Object.keys(AppointmentRepeat).map((item, key) => (
              <MenuItem key={key} value={item}>
                {formatMessage({ id: `dictionaries.appointment.repeat.${item}` })}
              </MenuItem>
            ))}
          </SelectField>
        </Grid>
      </Grid>
    </Card>
  );
};

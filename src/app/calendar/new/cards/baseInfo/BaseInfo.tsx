import React from 'react';
import { DateTime } from 'luxon';
import { useForm } from 'react-final-form';

import { AppointmentRepeat, AppointmentTermInput, CalendarTypes } from 'api/types';
import { Button, Card, Grid, IconButton, Box, Typography } from 'ui/atoms';
import { CheckboxField, DatePickerChip, DropdownField, TimePickerChip } from 'form/fields';
import { useLocale } from 'hooks';
import { AddIcon, CloseIcon } from 'ui/atoms/icons';
import { useStyles } from 'app/calendar/new/cards/baseInfo/BaseInfo.styles';

const splitDateTime = (date: string) => {
  const datetime = DateTime.fromISO(date);

  return { date: datetime.toISODate(), time: datetime.toISOTime() };
};

const DEFAULT_TERM_ITEM = {
  from: splitDateTime(
    DateTime.local()
      .plus({ day: 1 })
      .toISO(),
  ),
  to: splitDateTime(
    DateTime.local()
      .plus({ day: 1, hour: 1 })
      .toISO(),
  ),
};

export const AppointmentBaseInfoCard = () => {
  const fieldName = 'alternativeTerms';
  const repeatFieldName = 'repeatAppointment';
  const typeFieldName = 'type';
  const form = useForm();
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const values = form.getState().values;
  const alternativeTerms: AppointmentTermInput[] = values?.[fieldName] ?? [];
  const amountOfTerms = alternativeTerms?.length ?? 0;

  const allDay = values.type === CalendarTypes.Birthday ? true : values.allDay;

  return (
    <Card>
      <DropdownField
        items={Object.keys(CalendarTypes).map(item => ({
          label: formatMessage({ id: `calendar.name_of_event.${item}` }),
          value: item,
        }))}
        placeholder="calendar.name_of_event.placeholder"
        name={typeFieldName}
        label={formatMessage({ id: 'calendar.name_of_event' })}
      />
      <Grid container>
        <Grid item>
          <CheckboxField name="allDay" label={formatMessage({ id: 'appointment.all_day.label' })} />
        </Grid>
        <Grid item>
          <CheckboxField name="viewingBlock" label={formatMessage({ id: 'appointment.confirmed_date.label' })} />
        </Grid>
        <Grid item className="right">
          <CheckboxField name="confirmedDate" label={formatMessage({ id: 'appointment.confirmed_date.label' })} />
        </Grid>
      </Grid>
      <Box mb={1} />
      <Grid container className={classes.term}>
        <Grid item className={classes.item}>
          <Typography>{formatMessage({ id: 'appointment.from.label' })}</Typography>
          <DatePickerChip name={`from.date`} className={classes.date} />
          {!allDay && <TimePickerChip name={`from.time`} disableToolbar={false} />}
        </Grid>
        {!allDay && (
          <Grid item className={classes.item}>
            <Box mr={1.5} />
            <Typography>{formatMessage({ id: 'appointment.to.label' })}</Typography>
            <DatePickerChip name={`to.date`} className={classes.date} />
            <TimePickerChip name={`to.time`} disableToolbar={false} />
          </Grid>
        )}
      </Grid>
      {values.type !== CalendarTypes.Birthday &&
        alternativeTerms?.map((term, index) => (
          <Grid key={index} container className={classes.term}>
            <Grid item className={classes.item}>
              <Typography>{formatMessage({ id: 'appointment.from.label' })}</Typography>
              <DatePickerChip name={`alternativeTerms[${index}].from.date`} className={classes.date} />
              <TimePickerChip name={`alternativeTerms[${index}].from.time`} disableToolbar={false} />
            </Grid>
            <Grid item className={classes.item}>
              <Box mr={1.5} />
              <Typography>{formatMessage({ id: 'appointment.to.label' })}</Typography>
              <DatePickerChip name={`alternativeTerms[${index}].to.date`} className={classes.date} />
              <TimePickerChip name={`alternativeTerms[${index}].to.time`} disableToolbar={false} />
            </Grid>
            {amountOfTerms > 1 && (
              <Grid item className="right">
                <IconButton
                  onClick={() => {
                    form.change(
                      'alternativeTerms',
                      alternativeTerms.filter((__item, idx) => index !== idx),
                    );
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
            )}
          </Grid>
        ))}
      <Box mb={1} />
      {values.type !== CalendarTypes.Birthday && (
        <Grid container spacing={3} alignItems="center" className={classes.bottom}>
          <Grid item>
            <Button
              onClick={() => form.change('alternativeTerms', [...(alternativeTerms ?? []), DEFAULT_TERM_ITEM])}
              disabled={alternativeTerms.length >= 3}
            >
              <AddIcon /> {formatMessage({ id: 'appointment.alternative_term.label' })}
            </Button>
          </Grid>
          <Grid item className="right">
            <Box display="flex">
              <DropdownField
                items={Object.keys(AppointmentRepeat).map(item => ({
                  label: formatMessage({ id: `dictionaries.appointment.repeat.${item}` }),
                  value: item,
                }))}
                placeholder="appointment.repeat.placeholder"
                name={repeatFieldName}
              />
            </Box>
          </Grid>
        </Grid>
      )}
    </Card>
  );
};

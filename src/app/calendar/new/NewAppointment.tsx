import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { useHistory } from 'react-router-dom';

import { Box, Button, Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import { AddIcon } from 'ui/atoms/icons';
import { CalendarTypes } from 'api/types';

import { AppointmentBaseInfoCard } from './cards/baseInfo/BaseInfo';
import { ParticipantsLocation } from './cards/participantsLocation/ParticipantsLocation';
import { EditorCard } from './cards/editor/Editor';
import { NewAppointmentProps } from './NewAppointment.types';
import { AppointmentTypeCard } from './cards/type/AppointmentTypeCard';
import { CheckboxesCard } from './cards/checkboxesCard/CheckboxesCard';
import { useStyles } from './NewAppointment.styles';

export const NewAppointment = ({ members, locations, appointmentInfo, onSubmit, loading }: NewAppointmentProps) => {
  const { goBack } = useHistory();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Form
      initialValues={appointmentInfo}
      keepDirtyOnReinitialize
      mutators={{ ...arrayMutators }}
      onSubmit={values => onSubmit(values)}
    >
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit} autoComplete="off">
          <Page
            classes={{ container: classes.content }}
            hideBreadcrumb
            title={formatMessage({ id: 'appointment.new.title' })}
            titleActions={
              <Box display="flex" alignItems="center">
                <Button variant="outlined" color="primary" onClick={() => goBack()}>
                  {formatMessage({ id: 'common.cancel' })}
                </Button>
                <Box mr={3} />
                <Button type="submit" variant="contained" color="primary" disabled={loading}>
                  <AddIcon color="inherit" /> {formatMessage({ id: 'calendar.appointment.add' })}
                </Button>
              </Box>
            }
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <AppointmentBaseInfoCard />
                <EditorCard />
                {values.type !== CalendarTypes.Birthday && <AppointmentTypeCard />}
              </Grid>
              <Grid item xs={12} md={4}>
                {values.type !== CalendarTypes.Birthday && (
                  <ParticipantsLocation members={members} locations={locations} />
                )}
              </Grid>
              {values.type !== CalendarTypes.Birthday && (
                <Grid item xs={12}>
                  <CheckboxesCard />
                </Grid>
              )}
            </Grid>
          </Page>
        </form>
      )}
    </Form>
  );
};

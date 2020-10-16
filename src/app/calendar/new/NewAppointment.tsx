import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { ExitButton, Grid, Card } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import { AppointmentBaseInfoCard } from 'app/calendar/new/cards/baseInfo/BaseInfo';
import { ParticipantsLocation } from 'app/calendar/new/cards/participantsLocation/ParticipantsLocation';
import { EditorCard } from 'app/calendar/new/cards/editor/Editor';
import { NewAppointmentProps } from 'app/calendar/new/NewAppointment.types';

import { useStyles } from './NewAppointment.styles';

export const NewAppointment = ({ members, locations }: NewAppointmentProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Page
      classes={{ container: classes.content }}
      hideBreadcrumb
      title={formatMessage({ id: 'appointment.new.title' })}
      titleActions={<ExitButton />}
    >
      <Form mutators={{ ...arrayMutators }} onSubmit={() => {}}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <AppointmentBaseInfoCard />
                <EditorCard />
                <Card>fdsf</Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <ParticipantsLocation members={members} locations={locations} />
              </Grid>
              <Grid item xs={12}>
                <Card>asd</Card>
              </Grid>
            </Grid>
          </form>
        )}
      </Form>
    </Page>
  );
};

import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { ExitButton, Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';

import { AppointmentBaseInfoCard } from './cards/baseInfo/BaseInfo';
import { ParticipantsLocation } from './cards/participantsLocation/ParticipantsLocation';
import { EditorCard } from './cards/editor/Editor';
import { NewAppointmentProps } from './NewAppointment.types';
import { AppointmentTypeCard } from './cards/type/AppointmentTypeCard';
import { CheckboxesCard } from './cards/checkboxesCard/CheckboxesCard';
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
                <AppointmentTypeCard />
              </Grid>
              <Grid item xs={12} md={4}>
                <ParticipantsLocation members={members} locations={locations} />
              </Grid>
              <Grid item xs={12}>
                <CheckboxesCard />
              </Grid>
            </Grid>
          </form>
        )}
      </Form>
    </Page>
  );
};

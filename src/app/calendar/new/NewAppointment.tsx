import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { useHistory } from 'react-router-dom';
import clsx from 'classnames';

import { Box, Grid, IconButton } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import { BuildingIcon, CrmIcon, GraphIcon, HomeIcon, ExitIcon, TasksIcon } from 'ui/atoms/icons';
import { CalendarTypes } from 'api/types';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { ListOptionsMenu } from 'ui/molecules';

import { AppointmentBaseInfoCard } from './cards/baseInfo/BaseInfo';
import { Participant } from './cards/participant/Participant';
import { Location } from './cards/location/Location';
import { EditorCard } from './cards/editor/Editor';
import { NewAppointmentProps } from './NewAppointment.types';
import { AppointmentTypeCard } from './cards/type/AppointmentTypeCard';
import { CheckboxesCard } from './cards/checkboxesCard/CheckboxesCard';
import { useStyles } from './NewAppointment.styles';
import { PencilAppointment } from './cards/pencilAppointment/PencilAppointment';

export const NewAppointment = ({ members, locations, appointmentInfo, onSubmit }: NewAppointmentProps) => {
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
                <IconButton size="small" variant="roundedContained" className={classes.btnWhite}>
                  <TasksIcon />
                </IconButton>
                <Box
                  ml={7.5}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={clsx(classes.statusIcon, 'selected')}
                >
                  <BuildingIcon color="inherit" />
                </Box>
                <Box ml={1} display="flex" alignItems="center" justifyContent="center" className={classes.statusIcon}>
                  <CrmIcon color="inherit" />
                </Box>
                <Box ml={1} />
                <IconButton size="small" variant="roundedContained">
                  <GraphIcon />
                </IconButton>
                <Box ml={1} />
                <ListOptionsMenu id="new-appointment-setting-menu" onDeleteClick={() => {}} hideEditButton>
                  <ListOptionsMenuItem
                    title={formatMessage({
                      id: 'calendar.appointments.create_appointment.menu.reply',
                    })}
                    icon={<HomeIcon />}
                  />
                  <ListOptionsMenuItem
                    title={formatMessage({
                      id: 'calendar.appointments.create_appointment.menu.reply_to_all',
                    })}
                  />
                  <ListOptionsMenuItem
                    title={formatMessage({
                      id: 'calendar.appointments.create_appointment.menu.notification',
                    })}
                  />
                  <ListOptionsMenuItem
                    title={formatMessage({
                      id: 'calendar.appointments.create_appointment.menu.set_role',
                    })}
                  />
                  <ListOptionsMenuItem
                    title={formatMessage({
                      id: 'calendar.appointments.create_appointment.menu.print',
                    })}
                  />
                </ListOptionsMenu>
                <Box ml={1} />
                <IconButton size="small" variant="roundedContained" onClick={goBack} className={classes.btnBack}>
                  <ExitIcon />
                </IconButton>
              </Box>
            }
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <AppointmentBaseInfoCard />
                <PencilAppointment />
                <EditorCard />
                {values.type !== CalendarTypes.Birthday && <AppointmentTypeCard />}
              </Grid>
              <Grid item xs={12} md={4}>
                {values.type !== CalendarTypes.Birthday && (
                  <>
                    <Participant members={members} />
                    <Location locations={locations} />
                  </>
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

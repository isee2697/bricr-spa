import React from 'react';
import { Appointments as App, AppointmentsProps, WeekView as Week } from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import { palette } from 'theme/palette';

export const useStyles = (color: string = palette.blue.main) =>
  makeStyles(({ spacing }) => ({
    root: {
      backgroundColor: `${color}99`,
      borderTop: `${color} ${spacing(0.5)}px solid`,
      borderRadius: spacing(0, 0, 1, 1),
    },
    allDay: {
      borderRadius: spacing(1),
      minHeight: spacing(3),
    },
  }))();

const AppointmentWeekLayout = ({ ...props }: App.AppointmentProps) => {
  const color = props.resources.find(item => item.id === props.data.type)?.color as string;
  const classes = useStyles(color);

  return <App.Appointment {...props} className={classNames(classes.root, props.data.allDay && classes.allDay)} />;
};

export const Appointments = (props: AppointmentsProps) => {
  return <App {...props} appointmentComponent={AppointmentWeekLayout} />;
};

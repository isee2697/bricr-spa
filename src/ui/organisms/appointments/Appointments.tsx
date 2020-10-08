import React from 'react';
import { Appointments as App, AppointmentsProps, WeekView as Week } from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { Color } from '@material-ui/core';
import classNames from 'classnames';

export const useStyles = (color: Color) =>
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
  const classes = useStyles(props?.resources?.[0].color as Color);

  console.log(props.data.allDay);

  return <App.Appointment {...props} className={classNames(classes.root, classes.allDay)} />;
};

export const Appointments = (props: AppointmentsProps) => {
  return <App {...props} appointmentComponent={AppointmentWeekLayout} />;
};

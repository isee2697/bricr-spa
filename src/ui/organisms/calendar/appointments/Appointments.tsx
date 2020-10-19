import { useTheme } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';
import { Appointments as App, AppointmentsProps } from '@devexpress/dx-react-scheduler-material-ui';
import classNames from 'classnames';

import { AppointmentNodeProps } from './Appointment.types';
import { useStyles } from './Appointments.styles';

const AppointmentWeekLayout = (props: App.AppointmentProps) => {
  const color = props.resources.find(item => item.id === props.data.type)?.color as string;
  const classes = useStyles(color);

  return <App.Appointment {...props} className={classNames(classes.root, props.data.allDay && classes.allDay)} />;
};

const isAllDayAppointmentList = (data: AppointmentNodeProps[]) => {
  return !!data.find(({ props }) => !!props.params.data?.allDay && props.params.type === 'horizontal');
};

const AppointmentContainer = (props: App.ContainerProps & { children?: ReactNode }) => {
  const { spacing } = useTheme();
  const children = (props.children ?? []) as AppointmentNodeProps[];
  const isAllDay = isAllDayAppointmentList(children);

  if (isAllDay) {
    const transformHeight = parseInt(props.style.transform.match(/\d+/)[0]);
    const devideHeight = props.style.height < spacing(2) ? spacing(2) : spacing(3);
    const itemNumber = Math.floor(transformHeight / devideHeight);

    if (itemNumber > 3) {
      props.style.display = 'none';
    } else {
      props.style.height = spacing(3);
      props.style.transform = `unset`;
      props.style.msTransform = `unset`;
      props.style.top = spacing(3.1) * (itemNumber - 1) + 'px';
    }
  }

  return <App.Container {...props} />;
};

export const Appointments = (props: AppointmentsProps) => {
  return <App {...props} containerComponent={AppointmentContainer} appointmentComponent={AppointmentWeekLayout} />;
};

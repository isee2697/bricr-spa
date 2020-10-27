import React from 'react';
import { Appointments as App, AppointmentsProps } from '@devexpress/dx-react-scheduler-material-ui';
import classNames from 'classnames';

import { DateView } from 'ui/molecules/calendar/Calandar.types';
import { ShowMore } from 'ui/atoms/showMore/ShowMore';
import { WarningIcon } from 'ui/atoms/icons';

import {
  AppointmentComponentProps,
  AppointmentContainerProps,
  AppointmentNodeProps as AppointmentProp,
  ViewProps,
  OverlapProps,
} from './Appointment.types';
import { useStyles } from './Appointments.styles';

export const AppointmentComponent = ({ view, ...props }: AppointmentComponentProps) => {
  const color = props.resources.find(item => item.id === props.data.type)?.color as string;
  const classes = useStyles(color);

  return (
    <App.Appointment
      {...props}
      className={classNames(
        classes.root,
        view !== DateView.Month && props.data.allDay && classes.allDay,
        view && classes?.[view],
        props.className,
      )}
    />
  );
};

const getAppointmentData = (data: AppointmentProp[]) => {
  return (data[0] || data[1] || data[2]).props.params.data;
};

const AppointmentOverlap = ({ style }: OverlapProps) => {
  const classes = useStyles();

  return (
    <div className={classes.Warning} style={{ ...style }}>
      <WarningIcon color="secondary" />
    </div>
  );
};

const AppointmentContainer = ({ view = DateView.Week, ...props }: AppointmentContainerProps) => {
  const data = getAppointmentData((props.children ?? []) as AppointmentProp[]);

  if (!!data.isShowMoreButton || !!data.isHidden) {
    const child = !data.isHidden && <ShowMore amount={data.amount} data={data.appointments} />;

    return <div style={{ ...props.style }}>{child}</div>;
  }

  if (!!data.overlap) {
    return view === DateView.Day ? <AppointmentOverlap style={props.style} /> : <></>;
  }

  return <App.Container {...props} />;
};

export const AppointmentContent = (props: App.AppointmentContentProps) => {
  return <App.AppointmentContent {...props} />;
};

export const Appointments = ({ view = DateView.Week, ...props }: AppointmentsProps & ViewProps) => {
  return (
    <App
      {...props}
      containerComponent={props => <AppointmentContainer {...props} view={view} />}
      appointmentComponent={props => <AppointmentComponent {...props} view={view} />}
      appointmentContentComponent={AppointmentContent}
    />
  );
};

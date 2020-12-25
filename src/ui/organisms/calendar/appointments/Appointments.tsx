import React from 'react';
import { Appointments as App, AppointmentsProps } from '@devexpress/dx-react-scheduler-material-ui';
import classNames from 'classnames';
import { DateTime } from 'luxon';
import { ValidResourceInstance } from '@devexpress/dx-react-scheduler';

import { DateView } from 'ui/molecules/calendar/Calandar.types';
import { ShowMore } from 'ui/atoms/showMore/ShowMore';
import { LockIcon, RedoIcon, ReplayIcon, UserIcon, WarningIcon } from 'ui/atoms/icons';
import { CalendarTypes, TaskLabel } from 'api/types';

import {
  AppointmentComponentProps,
  AppointmentContainerProps,
  AppointmentNodeProps as AppointmentProp,
  OverlapProps,
  ViewProps,
} from './Appointment.types';
import { useStyles, useContentStyles } from './Appointments.styles';

export const AppointmentComponent = ({ view, ...props }: AppointmentComponentProps) => {
  const color = props.resources.find(item => item.id === (props.data.taskLabel || props.data.state || props.data.type))
    ?.color as string;
  const classes = useStyles(color);
  props.data.color = color;

  return (
    <App.Appointment
      {...props}
      className={classNames(
        classes.root,
        view !== DateView.Month && props.data.allDay && classes.allDay,
        view && classes?.[view],
        props.className,
        !!props.data.taskLabel && classes.task,
        props.data.type === CalendarTypes.Travel && classes.travelTime,
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

const TaskLabelIcon = ({ resource, className }: { resource?: ValidResourceInstance; className: string }) => {
  if (resource) {
    switch (resource.text as TaskLabel) {
      case TaskLabel.FollowUp:
        return <RedoIcon className={className} />;
      case TaskLabel.Business:
        return <UserIcon className={className} />;
      case TaskLabel.Private:
        return <LockIcon className={className} />;
      default:
    }
  }

  return <ReplayIcon className={className} />;
};

export const AppointmentContent = ({ ...props }: App.AppointmentContentProps) => {
  const taskResource = props.resources.find(resource => resource.fieldName === 'taskLabel');
  const classes = useContentStyles(props.data.color);

  if (taskResource) {
    const date = DateTime.fromJSDate(new Date(props.data.startDate));

    props.data.rRule = `RRULE:FREQ=DAILY;UNTIL=${date.toFormat(
      'yyyyddmm',
    )}T080800Z;COUNT=30;INTERVAL=1;WKST=MO;BYDAY=${date.weekdayShort.toUpperCase().substring(0, 2)}`;
  }
  const isRecurring = taskResource || props.data.rRule;

  props.recurringIconComponent = () => (
    <TaskLabelIcon className={taskResource ? classes.icon : classes.defaultIcon} resource={taskResource} />
  );

  return (
    <App.AppointmentContent
      {...props}
      className={classNames(classes.root, isRecurring ? classes.recurring : '', !taskResource && 'appointment')}
    />
  );
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

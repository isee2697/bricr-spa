import { AppointmentModel } from '@devexpress/dx-react-scheduler';
import { Appointments as App } from '@devexpress/dx-react-scheduler-material-ui';
import { ReactNode } from 'react';
import { AnyObject } from 'final-form';

import { DateView } from 'ui/molecules/calendar/Calandar.types';
import { DayView } from 'ui/organisms/calendar';

export type AppointmentNodeProps = {
  type: (props: AnyObject) => AnyObject;
  props: {
    params: {
      data: AppointmentModel;
      type: 'horizontal' | 'vertical';
    };
  };
};

export type ViewProps = { view?: DateView };
export type AppointmentBaseContainerProps = App.ContainerProps & { children?: ReactNode };
export type AppointmentContainerProps = AppointmentBaseContainerProps & ViewProps;

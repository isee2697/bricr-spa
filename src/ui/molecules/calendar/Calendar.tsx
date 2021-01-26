import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppointmentModel } from '@devexpress/dx-react-scheduler';

import {
  AllDayPanel,
  AppointmentForm,
  Appointments,
  AppointmentTooltip,
  AppointmentTooltipHeader,
  CurrentTimeIndicator,
  DayView,
  MonthView,
  Resources,
  Scheduler,
  ViewState,
  WeekView,
} from 'ui/organisms';
import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';

import {
  CalendarProps,
  ConvertDataFunction,
  CalendarTypeResource,
  TaskLabelResource,
  AppointmentStateResource,
  DateView,
  CalendarResources,
} from './Calandar.types';

export const connectDataToResources: ConvertDataFunction = schedulerData => {
  return schedulerData.map(item => ({
    ...item,
    type: CalendarTypeResource.find(type => type.text === item.type)?.id,
    taskLabel: TaskLabelResource.find(type => type.text === item.taskLabel)?.id,
    state: AppointmentStateResource.find(type => type.text === item.state)?.id,
  }));
};

export const Calendar = ({ account, data, currentDate, view }: CalendarProps) => {
  const { locale } = useLocale();
  const { push } = useHistory();

  const handleNavigateToEditAppointment = (appointmentData: AppointmentModel | undefined) => {
    if (appointmentData && appointmentData.id) {
      push(AppRoute.editAppointment.replace(':accountId', account?.id || '').replace(':id', `${appointmentData.id}`));
    }
  };

  return (
    <Scheduler height="auto" locale={locale} firstDayOfWeek={1} data={connectDataToResources(data)} currentView={view}>
      <ViewState currentDate={currentDate} currentViewName={view} />
      <DayView disableHead />
      <DayView disableHead name={DateView.Group} />
      <WeekView />
      <MonthView />
      <AllDayPanel />
      <Appointments view={view} />
      <CurrentTimeIndicator updateInterval={60000} />
      <AppointmentTooltip
        showCloseButton
        headerComponent={headerProps => (
          <AppointmentTooltipHeader {...headerProps} onEdit={handleNavigateToEditAppointment} />
        )}
      />
      <AppointmentForm readOnly />
      <Resources data={CalendarResources} mainResourceName="type" />
    </Scheduler>
  );
};

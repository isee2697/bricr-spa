import { AppointmentModel, Resource } from '@devexpress/dx-react-scheduler';

export enum DateView {
  Week = 'Week',
  Day = 'Day',
  Month = 'Month',
}

export type CalendarItem = {
  startDate: Date;
  endDate: Date;
  title: string;
};

export type CalendarProps = {
  data: AppointmentModel[];
  currentDate: Date;
  resources: Resource[];
};

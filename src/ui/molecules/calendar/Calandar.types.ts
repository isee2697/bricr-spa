import { AppointmentModel } from '@devexpress/dx-react-scheduler';

import { CalendarTypes } from 'api/types';
import { palette } from 'theme/palette';

export enum DateView {
  Day = 'Day',
  Week = 'Week',
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
  view: DateView;
};

export type ConvertDataFunction = (data: AppointmentModel[]) => AppointmentModel[];

export const CalendarTypeResource = [
  {
    id: 1,
    text: CalendarTypes.Meeting,
    color: palette.blue.main,
  },
  {
    id: 2,
    text: CalendarTypes.Appointment,
    color: palette.green.main,
  },
  {
    id: 3,
    text: CalendarTypes.Birthday,
    color: palette.orange.main,
  },
  {
    id: 4,
    text: CalendarTypes.Travel,
    color: palette.purple.main,
  },
  {
    id: 5,
    text: CalendarTypes.Private,
    color: palette.red.main,
  },
  {
    id: 6,
    text: CalendarTypes.Task,
    color: palette.orange.main,
  },
].map(item => ({
  ...item,
  fieldName: item.color,
  title: item.color,
  isMain: false,
  allowMultiple: false,
}));

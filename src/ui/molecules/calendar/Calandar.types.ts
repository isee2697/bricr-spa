import { AppointmentModel } from '@devexpress/dx-react-scheduler';

import { CalendarTypes, TaskLabel } from 'api/types';
import { palette } from 'theme/palette';

export enum DateView {
  Day = 'Day',
  Week = 'Week',
  Month = 'Month',
  Group = 'Group',
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
  height?: number;
};

export type ConvertDataFunction = (data: AppointmentModel[]) => AppointmentModel[];

export const TaskLabelResource = [
  {
    id: 1,
    text: TaskLabel.Private,
    color: palette.purple.main,
  },
  {
    id: 2,
    text: TaskLabel.FollowUp,
    color: palette.red.main,
  },
  {
    id: 3,
    text: TaskLabel.Business,
    color: palette.blue.main,
  },
].map(item => ({
  ...item,
  fieldName: item.color,
  title: item.color,
  isMain: false,
  allowMultiple: false,
}));

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

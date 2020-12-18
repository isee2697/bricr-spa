import { AppointmentModel, Resource, ResourceInstance, ValidResourceInstance } from '@devexpress/dx-react-scheduler';

import { AppointmentState, CalendarTypes, TaskLabel, NylasAccountItem } from 'api/types';
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
  account?: NylasAccountItem;
};

export type ConvertDataFunction = (data: AppointmentModel[]) => AppointmentModel[];

export const CalendarResources: Resource[] = [];

const createNewResource = (fieldName: string, resource: ResourceInstance[]): ValidResourceInstance[] => {
  CalendarResources.push({ fieldName, title: fieldName, instances: resource });

  return resource.map(item => ({
    ...item,
    fieldName: fieldName,
    title: item.color,
    isMain: false,
    allowMultiple: false,
  })) as ValidResourceInstance[];
};

export const AppointmentStateResource = createNewResource('state', [
  {
    id: 1,
    text: AppointmentState.Completed,
    color: palette.blue.main,
  },
  {
    id: 2,
    text: AppointmentState.Unconfirmed,
    color: palette.orange.main,
  },
  {
    id: 3,
    text: AppointmentState.Confirmed,
    color: palette.green.main,
  },
  {
    id: 4,
    text: AppointmentState.Pencil,
    color: palette.gray.main,
  },
]);

export const TaskLabelResource = createNewResource('taskLabel', [
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
]);

export const CalendarTypeResource = createNewResource('type', [
  {
    id: 1,
    text: CalendarTypes.Appointment,
    color: palette.green.main,
  },
  {
    id: 2,
    text: CalendarTypes.Birthday,
    color: palette.orange.main,
  },
  {
    id: 3,
    text: CalendarTypes.Travel,
    color: palette.blue.main,
  },
  {
    id: 4,
    text: CalendarTypes.Private,
    color: palette.purple.main,
  },
  {
    id: 5,
    text: CalendarTypes.Task,
    color: palette.orange.main,
  },
]);

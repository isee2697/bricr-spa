import { AppointmentModel } from '@devexpress/dx-react-scheduler';

import { CalendarTypes } from 'api/types';
import { GroupTaskItem } from 'app/tasks/tasksSwimlane/TasksSwimlane.types';

export type TodayViewCardsProps = {
  type: CalendarTypes;
  appointments: AppointmentModel[];
};

export type ReminderCardProps = {
  appointment: AppointmentModel;
};

export type TaskCardProps = {
  task: GroupTaskItem;
};

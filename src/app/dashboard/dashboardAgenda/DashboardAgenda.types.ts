import { Appointment, Task } from 'api/types';

export type DashboardAgendaProps = {
  tasks: Task[];
  agenda: Appointment[];
};

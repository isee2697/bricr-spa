import { AppointmentModel } from '@devexpress/dx-react-scheduler';
import { DateTime } from 'luxon';

export type TodaySidePanelProps = {
  date: DateTime;
  appointments: AppointmentModel[];
};

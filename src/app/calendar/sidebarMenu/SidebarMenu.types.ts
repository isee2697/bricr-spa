import { DatePickerCalendarProps } from 'ui/molecules/datePickerCalendar/DatePickerCalendar.types';

export type SidebarMenuProps = DatePickerCalendarProps & {
  isVisible: boolean;
  onHide: () => void;
};

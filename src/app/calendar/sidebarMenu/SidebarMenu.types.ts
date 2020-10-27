import { DatePickerCalendarProps } from 'ui/molecules/datePickerCalendar/DatePickerCalendar.types';
import { CalendarViewProps } from 'app/calendar/view/CalendarView.types';
import { CalendarGroup } from 'api/types';

export type SidebarMenuProps = DatePickerCalendarProps &
  Pick<CalendarViewProps, 'groups' | 'teamMembers'> & {
    isVisible: boolean;
    onHide: () => void;
    onGroupSelect: (group: CalendarGroup) => void;
    selectedGroup?: CalendarGroup;
  };

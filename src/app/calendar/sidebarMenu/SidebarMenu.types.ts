import { CalendarViewProps } from 'app/calendar/view/CalendarView.types';

export type SidebarMenuProps = Pick<CalendarViewProps, 'groups' | 'teamMembers' | 'filters' | 'onFilterChange'> & {
  isVisible: boolean;
  onHide: () => void;
};

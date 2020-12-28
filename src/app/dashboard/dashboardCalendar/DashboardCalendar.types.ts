import { AgendaItemProps } from 'ui/atoms/agendaItem/AgendaItem.types';

export type DashboardCalendarProps = {
  onMoreClick: () => void;
  data: AgendaItemProps[];
};

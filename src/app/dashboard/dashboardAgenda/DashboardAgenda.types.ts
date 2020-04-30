type AgendaItem = {
  title: string;
  startDate: string;
  endDate: string;
  isAllDay: boolean;
};

export type DashboardAgendaProps = {
  agendaItems: AgendaItem[];
};

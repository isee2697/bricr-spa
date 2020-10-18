import { DateTime } from 'luxon';

export type MatchProfileProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type MatchProfile = {
  id: string;
  dateCreated: DateTime;
  amount: number;
};

import { DateTime } from 'luxon';

export type MatchProfileContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

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

export type MatchProfileMatch = {
  id: string;
  dateCreated: DateTime;
  name: string;
  size: number;
  rooms: number;
  properties: string[];
  price: number;
  matchStrength: number;
  image: string;
};

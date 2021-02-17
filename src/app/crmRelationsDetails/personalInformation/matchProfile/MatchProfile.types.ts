import { DateTime } from 'luxon';

import { CrmItem } from 'app/crm/Crm.types';

export type MatchProfileContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  crm: CrmItem;
};

export type MatchProfileProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  crm: CrmItem;
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

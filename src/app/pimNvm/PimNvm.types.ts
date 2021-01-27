import { DateTime } from 'luxon';

import { ListPimsFilters, PropertyType } from 'api/types';

export enum PimNvmTab {
  NvmSearch = 'NvmSearch',
  DailyMutations = 'DailyMutations',
}

export type PimNvmProps = {
  tab: PimNvmTab;
  onChangeTab: (tab: PimNvmTab) => void;
  onFilter: (filters: ListPimsFilters) => void;
  activeFilters: ListPimsFilters;
};

export type NvmItem = {
  id: string;
  image: string;
  date: DateTime;
  address: string;
  size: number;
  rooms: number;
  properties: PropertyType[];
  price: {
    original: number;
    new: number;
    perMonth: number;
  };
  status: NvmItemStatus;
  labels: NvmItemLabel[];
};

export enum NvmItemStatus {
  WaitForOwner = 'WaitForOwner',
  ProcessReactions = 'ProcessReactions',
  SignContract = 'SignContract',
  PriceChange = 'PriceChange',
  New = 'New',
  Cancellation = 'Cancellation',
  Sold = 'Sold',
}

export enum NvmItemLabel {
  Sale = 'Sale',
  Rent = 'Rent',
  Order = 'Order',
  Acquisition = 'Acquisition',
}

import { DateTime } from 'luxon';

import { PropertyConnection } from 'api/types';

export enum OrdersListTab {
  ActionRequired = 'ActionRequired',
  Active = 'Active',
  Archived = 'Archived',
}

export type OrdersSaleData = {
  image: string;
  date: DateTime;
  name: string;
  size: number;
  rooms: number;
  properties: PropertyConnection[];
  priceOriginal: number;
  price: number;
  priceBeneficial: number;
  matchStrength: number;
};

export type OrderAppraisalData = {
  image: string;
  date: DateTime;
  name: string;
  size: number;
  rooms: number;
  properties: PropertyConnection[];
  priceOriginal: number;
  price: number;
  priceBeneficial: number;
  matchStrength: number;
};

export type OrdersData = {
  sale: OrdersSaleData;
  appraisal: OrderAppraisalData;
};

export type OrdersListProps = {
  data: OrdersData;
  status: OrdersListTab;
  onStatusChange: (status: OrdersListTab) => void;
};

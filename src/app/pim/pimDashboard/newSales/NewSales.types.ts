import { DateTime } from 'luxon';

export type NewSalesProps = {
  items: NewSalesItem[];
};

export type NewSalesItem = {
  id: number;
  address: string;
  image: string;
  bidding: number;
  date: DateTime;
};

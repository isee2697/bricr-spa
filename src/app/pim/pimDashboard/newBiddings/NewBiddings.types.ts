import { DateTime } from 'luxon';

export type NewBiddingsProps = {
  items: NewBiddingsItem[];
};

export type NewBiddingsItem = {
  id: number;
  address: string;
  image: string;
  bidding: number;
  date: DateTime;
};

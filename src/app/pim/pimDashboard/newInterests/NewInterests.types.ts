import { DateTime } from 'luxon';

export type NewInterestsProps = {
  items: NewInterestsItem[];
};

export type NewInterestsItem = {
  id: number;
  address: string;
  image: string;
  interests: number;
  date: DateTime;
};

import { DateTime } from 'luxon';

export type Timeline = {
  status: 'done' | 'expired';
  date: DateTime;
  title: string;
};

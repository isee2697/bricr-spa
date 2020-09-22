import { DateTime } from 'luxon';

import { Profile } from '../../../../../api/types';

export type Timeline = {
  status: 'done' | 'expired';
  date: DateTime;
  title: string;
  memo?: string;
  sentTo?: Profile[];
  location?: {
    address: string;
    image: string;
  };
  bog?: {
    address: string;
    image: string;
  };
  isComplete?: boolean;
  postedBy?: Profile;
};

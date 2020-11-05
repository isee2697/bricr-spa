import { DateTime } from 'luxon';

import { Email } from 'app/email/Email.types';

export const EMAILS: Email[] = [
  {
    id: '0001',
    from: {
      firstName: 'John',
      lastName: 'Doe',
      image: 'http://placeimg.com/80/80/people',
    },
    date: DateTime.local(),
    links: 4,
    pinned: true,
    subject: 'Billing discussion',
  },
  {
    id: '0002',
    from: {
      firstName: 'John',
      lastName: 'Doe',
      image: 'http://placeimg.com/80/80/people',
    },
    date: DateTime.local(),
    links: 1,
    pinned: false,
    subject: 'Billing discussion',
  },
  {
    id: '0003',
    from: {
      firstName: 'John',
      lastName: 'Doe',
      image: 'http://placeimg.com/80/80/people',
    },
    date: DateTime.local(),
    links: 0,
    pinned: true,
    subject: 'Billing discussion',
  },
];

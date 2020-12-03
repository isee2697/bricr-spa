import { DateTime } from 'luxon';

import { Email } from 'app/email/Email.types';

export const EMAILS: Email[] = [
  {
    id: '0001',
    folder: { name: 'inbox' },
    from: [
      {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
      },
    ],
    to: [],
    date: DateTime.local().toISO(),
    links: 4,
    pinned: true,
    subject: 'Billing discussion',
    body: 'Billing discussion',
  },
  {
    id: '0002',
    folder: { name: 'inbox' },
    from: [
      {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
      },
    ],
    to: [],
    date: DateTime.local().toISO(),
    links: 1,
    pinned: false,
    subject: 'Billing discussion',
    body: 'Billing discussion',
  },
  {
    id: '0003',
    folder: { name: 'inbox' },
    from: [
      {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
      },
    ],
    to: [],
    date: DateTime.local().toISO(),
    links: 0,
    pinned: true,
    subject: 'Billing discussion',
    body: 'Billing discussion',
  },
];

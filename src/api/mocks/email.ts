import { DateTime } from 'luxon';

import { Email } from 'app/email/Email.types';
import { SignatureItem } from 'app/email/selectSignatureModal/SelectSignatureModal.types';
import { EmailTemplateItem } from 'app/email/selectTemplateModal/SelectTemplateModal.types';

export const EMAILS: Email[] = [
  {
    id: '0001',
    folder: {
      id: '0001',
      name: 'inbox',
      displayName: 'Inbox',
      nylasFolderId: '0001',
      userId: '0001',
    },
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
    folder: {
      id: '0001',
      name: 'inbox',
      displayName: 'Inbox',
      nylasFolderId: '0001',
      userId: '0001',
    },
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
    folder: {
      id: '0001',
      name: 'inbox',
      displayName: 'Inbox',
      nylasFolderId: '0001',
      userId: '0001',
    },
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

export const EMAIL_SIGNATURES: SignatureItem[] = [
  {
    id: '0001',
    name: 'Signature 01',
    url: 'http://placeimg.com/240/60/arch',
  },
  {
    id: '0002',
    name: 'Signature 02',
    url: 'http://placeimg.com/240/60/arch',
  },
];

export const EMAIL_TEMPLATES: EmailTemplateItem[] = [
  {
    id: '0001',
    name: 'Template 01',
  },
  {
    id: '0002',
    name: 'Template 02',
  },
];

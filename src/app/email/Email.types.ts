import { DateTime } from 'luxon';
import { ReactNode } from 'react';

import { EmailListItem, NylasAccountItem } from 'api/types';
import { EntityType } from 'app/shared/entityType';

export type EmailProps = {
  path: string;
  entityType: EntityType;
  breadcrumbs: ReactNode;
  accounts: NylasAccountItem[];
  onAddedNewAccount: VoidFunction;
};

export type Email = Omit<EmailListItem, '__typename'> & {
  body?: string;
  pinned?: boolean;
  links?: number;
  image?: string;
};

export type EmailReply = {
  id: string;
  from: {
    firstName: string;
    lastName: string;
    image: string;
  };
  description?: string;
  date: DateTime;
};

export type EmailDragObject = Email & {
  type: string;
};

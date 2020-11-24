import { DateTime } from 'luxon';
import { ReactNode } from 'react';

import { EntityType } from 'app/shared/entityType';

export type EmailProps = {
  path: string;
  entityType: EntityType;
  breadcrumbs: ReactNode;
};

export type Email = {
  id: string;
  from: {
    firstName: string;
    lastName: string;
    image: string;
  };
  pinned: boolean;
  subject: string;
  description?: string;
  links: number;
  date: DateTime;
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

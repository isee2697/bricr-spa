import { DateTime } from 'luxon';

import { EntityType } from 'app/shared/entityType';

export type EmailProps = {
  path: string;
  entityType: EntityType;
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
  links: number;
  date: DateTime;
};

export type EmailDragObject = Email & {
  type: string;
};

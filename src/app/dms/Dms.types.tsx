import { ReactNode } from 'react';

import { EntityType } from 'app/shared/entityType';

export type DmsMeta = {
  forApproval: number;
  sent: number;
  viewed: number;
  completed: number;
  declined: number;
  expired: number;
};

export type DmsProps = {
  dms: DmsMeta;
  breadcrumbs: ReactNode;
  path: string;
  entityType: EntityType;
};
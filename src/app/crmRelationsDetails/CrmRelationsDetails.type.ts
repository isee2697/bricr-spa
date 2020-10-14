import { ReactNode } from 'react';

import { CrmItem } from 'app/crm/Crm.types';
import { EntityType } from 'app/shared/entityType';

export type CrmRelationsDetailsProps = {
  crm: CrmItem;
  breadcrumbs: ReactNode;
  path: string;
  entityType: EntityType;
};

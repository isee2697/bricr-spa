import { ReactNode } from 'react';

import { CrmItem } from 'app/crm/Crm.types';
import { EntityType } from 'app/shared/entityType';

export type CrmBusinessesDetailsProps = {
  crm: CrmItem;
  breadcrumbs: ReactNode;
  path: string;
  entityType: EntityType;
};

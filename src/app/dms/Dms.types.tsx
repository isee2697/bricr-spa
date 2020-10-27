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

export type DmsRequestStatusType = 'request' | 'user_notified' | 'uploaded' | 'accepted';

export type DmsDocument = {
  id: string;
  name?: string;
  modifiedAt?: string;
  requestStatus: DmsRequestStatusType;
  isRejected?: boolean;
  filePath?: string;
  size?: number;
  type?: string;
};

export type DmsFolderType = {
  id: string;
  name: string;
  folders?: DmsFolderType[];
  documents?: DmsDocument[];
};

export type DmsFolderStats = {
  data: DmsFolderType;
  meta: DmsMeta;
};

export type DmsStats = {
  total: DmsMeta;
  folders?: DmsFolderStats[];
};

export type DmsProps = {
  dms: DmsStats;
  breadcrumbs: ReactNode;
  path: string;
  entityType: EntityType;
};

import { ReactNode } from 'react';
import { DateTime } from 'luxon';

import { EntityType } from 'app/shared/entityType';

export type DmsMeta = {
  forApproval: number;
  sent: number;
  viewed: number;
  completed: number;
  declined: number;
  expired: number;
};

export enum DmsRequestStatusType {
  REQUEST = 'Request',
  USER_NOTIFIED = 'User Notified',
  UPLOADED = 'Uploaded',
  ACCEPTED = 'Accepted',
}

export type DmsDocument = {
  id: string;
  name?: string;
  avatar?: string;
  modifiedAt?: DateTime;
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

import { ReactNode } from 'react';
import { DateTime } from 'luxon';

import { EntityType } from 'app/shared/entityType';
import { DocumentRequestStep } from 'app/crmRelationsDetails/documents/Documents.types';
import { DmsEntityType } from 'api/types';

export type DmsMeta = {
  forApproval: number;
  sent: number;
  viewed: number;
  completed: number;
  declined: number;
  expired: number;
};

export type DmsDocument = {
  id: string;
  name?: string;
  avatar?: string;
  dateCreated: DateTime;
  stepsCompleted: DocumentRequestStep[];
  size?: number;
  type?: string;
};

export type DmsFolderType = {
  id: string;
  type?: string;
  entityType?: DmsEntityType;
  name: string;
  folders?: DmsFolderType[];
  documents?: DmsDocument[];
  isCustom?: boolean;
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

export type DmsDocumentType = {
  [key: string]: {
    [key: string]: string[];
  };
};

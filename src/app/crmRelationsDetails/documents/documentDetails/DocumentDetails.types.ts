import { ReactNode } from 'react';

import { PimOverallInfoQueryHookResult } from 'api/types';
import { DocumentStatus } from '../Documents.types';
import { Document } from 'app/crmRelationsDetails/documents/Documents.types';

export type DocumentDetailsType = {
  id: string;
  name: string;
  version: number;
  status: DocumentStatus;
  file: string;
  previousVersions: Document[];
};

export type DocumentDetailsContainerProps = {
  path: string;
};

export type DocumentDetailsProps = Partial<Pick<PimOverallInfoQueryHookResult, 'loading' | 'error'>> & {
  data?: DocumentDetailsType;
  breadcrumbs: ReactNode;
  path: string;
};

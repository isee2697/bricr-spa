import { ReactNode } from 'react';

import { PimOverallInfoQueryHookResult } from 'api/types';
import { DocumentKind } from '../../Documents.types';

export type DocumentUploadedType = {
  id: string;
  name: string;
  documentKind: DocumentKind;
  file: string;
};

export type DocumentUploadedProps = Pick<PimOverallInfoQueryHookResult, 'loading' | 'error'> & {
  pimId: string;
  data?: DocumentUploadedType;
  breadcrumbs: ReactNode;
};

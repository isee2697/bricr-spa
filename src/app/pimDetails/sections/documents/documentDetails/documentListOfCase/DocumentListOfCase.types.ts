import { ReactNode } from 'react';

import { PimOverallInfoQueryHookResult } from 'api/types';
import { DocumentKind } from '../../Documents.types';

export type DocumentListOfCaseType = {
  id: string;
  name: string;
  documentKind: DocumentKind;
};

export type DocumentListOfCaseProps = Pick<PimOverallInfoQueryHookResult, 'loading' | 'error'> & {
  pimId: string;
  data?: DocumentListOfCaseType;
  breadcrumbs: ReactNode;
};

import { ReactNode } from 'react';

import { PimOverallInfoQueryHookResult } from 'api/types';
import { DocumentKind } from '../../general/General.types';

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

export type DocumentListOfCaseCard = {
  id: number;
  name: string;
  items?: DocumentOutsideItem[];
};

export type DocumentOutsideItem = {
  id: number;
  description: string;
  state?: DocumentOutsideItemState;
};

export enum DocumentOutsideItemState {
  StaysBehind = 'StaysBehind',
  GoesWith = 'GoesWith',
  ForTakeover = 'ForTakeover',
  Nvt = 'Nvt',
}

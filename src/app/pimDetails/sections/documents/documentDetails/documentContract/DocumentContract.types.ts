import { ReactNode } from 'react';

import { PimOverallInfoQueryHookResult } from 'api/types';
import { DocumentKind } from '../../Documents.types';

export enum ContractStepType {
  Seller = 'Seller',
  Buyer = 'Buyer',
  SalesPrice = 'SalesPrice',
  GroundLease = 'GroundLease',
  MovableProperty = 'MovableProperty',
  PublicLawRestrictions = 'PublicLawRestrictions',
  RemovableRightsTenants = 'RemovableRightsTenants',
  CharesAndObligations = 'CharesAndObligations',
  Handover = 'Handover',
  Notary = 'Notary',
  Guarentee = 'Guarentee',
  Dissolutions = 'Dissolutions',
  NHG = 'NHG',
  ConstructionInspection = 'ConstructionInspection',
  Registration = 'Registration',
  AdditionalArticles = 'AdditionalArticles',
  Signing = 'Signing',
  Allonge = 'Allonge',
}

export enum ContractStepStatus {
  Pending = 'Pending',
  InProgress = 'In Progress',
  Completed = 'Completed',
}

export type DocumentContractStepType = {
  id: string;
  type: ContractStepType;
  title: string;
  status: ContractStepStatus;
  modifiedAt?: string;
  users?: string[];
  description?: string;
};

export type DocumentContractType = {
  id: string;
  name: string;
  documentKind: DocumentKind;
  steps: DocumentContractStepType[];
};

export type DocumentContractProps = Pick<PimOverallInfoQueryHookResult, 'loading' | 'error'> & {
  pimId: string;
  data?: DocumentContractType;
  breadcrumbs: ReactNode;
};

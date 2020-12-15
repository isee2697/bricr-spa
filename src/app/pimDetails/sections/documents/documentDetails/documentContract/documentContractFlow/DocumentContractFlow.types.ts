import { DocumentKind } from '../../../Documents.types';
import { DocumentContractType } from '../DocumentContract.types';

export enum SalesConditionsType {
  KostenKoper = 'Kosten koper',
  Vrijopnaam = 'Vrij op naam',
}

export enum MovablePropertyType {
  Seller = 'Seller',
  Buyer = 'Buyer',
  Party = 'Party',
}

export enum BenefitBuyerType {
  ActualDelivery = 'ActualDelivery',
  LegalDelivery = 'LegalDelivery',
}

export enum CustomerType {
  Seller = 'Seller',
  Buyer = 'Buyer',
}

export enum MortgageType {
  Appropriate = 'Appropriate',
  Unknown = 'Unknown',
}

export enum RegistrationCostType {
  Seller = 'Seller',
  Buyer = 'Buyer',
  Both = 'Both',
}

export type ExtraArticleType = {
  number: string;
  description: string;
};

export type AllongeType = {
  number: string;
  description: string;
};

export type DocumentContractFlowProps = {
  data: DocumentContractType;
};

export type ContractFormProps = {
  initOpened?: boolean;
  title?: string;
  subtitle?: string;
  documentKind?: DocumentKind;
};

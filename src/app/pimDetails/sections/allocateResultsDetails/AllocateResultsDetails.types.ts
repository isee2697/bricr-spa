import { DateTime } from 'luxon';

import { PimDetailsSectionProps } from '../../PimDetails.types';
import {
  OutsideFeatureType,
  PersonRole,
  Profile,
  PropertyRelatedItems,
  PropertyType,
  TypeOfObjectType,
} from 'api/types';

export enum AllocateResultsRelationRanking {
  Gold = 0,
  Silver = 1,
  Bronze = 2,
  None = 3,
}

export type AllocatedResultCountInfo = {
  allocatedProperties: number;
  notAllocatedProperties: number;
};

export type AllocatedPropertyRelation = {
  id: string;
  ranking: AllocateResultsRelationRanking;
  relation: Pick<Profile, 'firstName' | 'lastName' | 'image'>;
  partner: Pick<Profile, 'firstName' | 'lastName' | 'image'>;
  role?: PersonRole;
  accepted: boolean;
  monthlyIncomeFrom: number;
  monthlyIncomeTo: number;
  yearlyAggregateIncome: number;
  missingDocuments: string[];
  maximumMortgage: number;
  dateOfSubscription: DateTime;
  preference: number;
  houseForSale: boolean;
  relations: Pick<Profile, 'firstName' | 'lastName' | 'image'>[];
};

export type AssignedPropertyType = 'Projectinteresse';

export type AssignedProperty = {
  id: string;
  name: string;
  date: Date;
  type: AssignedPropertyType;
  price: number;
};

export type AllocatedProperty = {
  id: string;
  image: string;
  name: string;
  size: number;
  rooms: number;
  propertyTypes: PropertyType[];
  propertyRelatedItems: PropertyRelatedItems[];
  outsideFeatureTypes: OutsideFeatureType[];
  monthlyPrice: number;
  allocatedRelations: AllocatedPropertyRelation[];
  allocationBase: string;
  assigned: AssignedProperty[];
  unassigned: AssignedProperty[];
  objectTypes: TypeOfObjectType[];
};

export type AllocateResultsDetailsProps = PimDetailsSectionProps;

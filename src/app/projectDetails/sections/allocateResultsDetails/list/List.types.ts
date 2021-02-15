import { DateTime } from 'luxon';

import { OutsideFeatureType, PersonRole, Profile, PropertyRelatedItems, PropertyType } from 'api/types';
import { AllocateResultsRelationRanking } from '../AllocateResultsDetails.types';

export type AllocatedResultCountInfo = {
  allocatedProperties: number;
  notAllocatedProperties: number;
};

export type AllocatedPropertyRelation = {
  ranking: AllocateResultsRelationRanking;
  relation: Pick<Profile, 'firstName' | 'lastName' | 'image'>;
  partner: Pick<Profile, 'firstName' | 'lastName' | 'image'>;
  role?: PersonRole;
  accepted: boolean;
  monthlyIncomeFrom: number;
  monthlyIncomeTo: number;
  yearlyAggregateIncome: number;
  missingDocuments: string[];
  maximumRentalPrice: number;
  dateOfSubscription: DateTime;
  typeOfInterest: string;
  preference: number;
  relations: Pick<Profile, 'firstName' | 'lastName' | 'image'>[];
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
  allocationBase?: string;
};

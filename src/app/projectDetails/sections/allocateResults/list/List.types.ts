import { DateTime } from 'luxon';

import { AllocateResultsRelationRanking } from '../../allocateResultsDetails/AllocateResultsDetails.types';

export type AllocateResultItem = {
  id: string;
  assignee: string;
  date: DateTime;
  name: string;
  relations: AllocateResultRelation[];
  sortOrders: AllocateResultSortOrder[];
  allocationBase: string;
  assigned: number;
  unassigned: number;
};

export type AllocateResultRelation = {
  id: string;
  ranking: AllocateResultsRelationRanking;
  allocated: boolean;
};

export enum AllocateResultSortOrder {
  CollectiveIncome = 'CollectiveIncome',
  RegistrationDate = 'RegistrationData',
}

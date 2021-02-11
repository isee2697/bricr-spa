import { PricingType, TeamRight } from 'api/types';
import { PromiseFunction } from 'app/shared/types';
import { AddAllocateCriteriaBody } from '../addAllocateCriteria/AddAllocateCriteriaModal.types';
import { AllocateCriteriaType } from '../AllocateCriteria.types';

export type AllocateCriteriaListContainerProps = {
  type: AllocateCriteriaType;
};

export type AllocateCriteriaListProps = {
  type: AllocateCriteriaType;
  items: AllocateCriteriaItem[];
  onSubmit: PromiseFunction<AddAllocateCriteriaBody>;
};

export type AllocateCriteriaItem = {
  id: string;
  title: string;
  typeOfProperty: TeamRight;
  price: PricingType;
  used: number;
};

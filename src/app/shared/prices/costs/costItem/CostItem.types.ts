import { CommonCost } from 'api/types';

export type CostItemProps = {
  cost: CommonCost;
  index: number;
  inEditMode: boolean;
  isExpanded: boolean;
  onExpand: VoidFunction;
};

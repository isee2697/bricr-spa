import { NcpCost } from 'api/types';

export type CostItemProps = {
  cost: NcpCost;
  index: number;
  inEditMode: boolean;
  isExpanded: boolean;
  onExpand: VoidFunction;
};

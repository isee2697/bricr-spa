import { AllocatedPropertyRelation } from '../../AllocateResultsDetails.types';

export type RankingListItemProps = {
  checked: boolean;
  onSelect: VoidFunction;
  item: AllocatedPropertyRelation;
};

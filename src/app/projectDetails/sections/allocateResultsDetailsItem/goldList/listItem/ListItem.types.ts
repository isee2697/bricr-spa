import { AllocatedPropertyRelation } from '../../AllocateResultsDetailItem.types';

export type RankingListItemProps = {
  checked: boolean;
  onSelect: VoidFunction;
  item: AllocatedPropertyRelation;
};

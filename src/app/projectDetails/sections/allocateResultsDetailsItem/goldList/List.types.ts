import { AllocatedPropertyRelation } from '../AllocateResultsDetailItem.types';

export type RankingListProps = {
  items: AllocatedPropertyRelation[];
  selected: string[];
  onSelect: (id: string) => void;
};

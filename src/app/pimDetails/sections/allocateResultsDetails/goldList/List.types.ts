import { AllocatedPropertyRelation } from '../AllocateResultsDetails.types';

export type RankingListProps = {
  items: AllocatedPropertyRelation[];
  selected: string[];
  onSelect: (id: string) => void;
};

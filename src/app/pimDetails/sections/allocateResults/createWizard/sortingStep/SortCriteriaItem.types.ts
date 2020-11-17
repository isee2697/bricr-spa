export type SortCriteriaItemProps = {
  sortCriteria: string;
  index: number;
  disabled: boolean;
  onUpdateItemOrder: (key: string, position: number) => void;
};

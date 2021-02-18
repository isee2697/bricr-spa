export enum ITEM_TYPE {
  ListItem = 'LIST_ITEM',
}

export type ListType = {
  label: string;
  key: string;
};

export type ListItemProps = {
  data: ListType;
  hasCheckbox?: boolean;
  index: number;
  onUpdateList: (item: number, target: number) => void;
};

export type ReorderableListProps = {
  hasCheckbox?: boolean;
};

export type ListColumnProps = {
  hasCheckbox?: boolean;
  onUpdateList: (item: number, target: number) => void;
  items: ListType[];
};

export type ListTypeDragObject = ListType & {
  type: string;
  index: number;
};

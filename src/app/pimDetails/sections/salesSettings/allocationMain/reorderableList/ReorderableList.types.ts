export enum ITEM_TYPE {
  ListItem = 'LIST_ITEM',
}

export type ListType = {
  label: string;
  key: string;
  checked: boolean;
};

export type ListItemProps = {
  data: ListType;
  index: number;
  onUpdateList: (item: ListType, target: ListType) => void;
  onUpdateCheckedStatus: (item: ListType) => void;
};

export type ListColumnProps = {
  onUpdateList: (item: ListType, target: ListType) => void;
  onUpdateCheckedStatus: (item: ListType) => void;
  items: ListType[];
};

export type ListTypeDragObject = ListType & {
  type: string;
  index: number;
};

export type ReorderableListProps = {};

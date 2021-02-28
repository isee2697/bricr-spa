export type HeaderColumnItemType<T> = {
  value: keyof T;
  hidden: boolean;
};

export type ColumnModalProps<T> = {
  isOpened: boolean;
  onClose: VoidFunction;
  onApply: (columns: HeaderColumnItemType<T>[]) => void;
  columns: HeaderColumnItemType<T>[];
  maxColumns?: number;
};

export type HeaderColumnItemProps = {
  item: string;
  changeOrder: (beforeObj: string, dropObj: string) => void;
  isDisabled?: boolean;
};

export type HeaderColumnItemDragObject = {
  type: string;
  item: string;
};

export type ColumnItemPlaceholderProps = {
  onDropColumn: (dropObj: string) => void;
};

import { AllocateResultsTableMovableHeader } from '../AllocateResultsTableView.types';

export type HeaderColumnItemType = {
  value: AllocateResultsTableMovableHeader;
  hidden: boolean;
};

export type HeaderFilterModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onApply: (columns: HeaderColumnItemType[]) => void;
  columns: HeaderColumnItemType[];
  maxColumns?: number;
};

export type HeaderColumnItemProps = {
  item: string;
  isShow: boolean;
  setShow: (show: boolean) => void;
  changeOrder: (beforeObj: string, dropObj: string) => void;
  isDisabled?: boolean;
};

export type HeaderColumnItemDragObject = {
  type: string;
  item: string;
};

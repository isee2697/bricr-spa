import { CrmTableMovableHeader } from '../CrmTableView.types';

export type HeaderColumnItemType = {
  value: CrmTableMovableHeader;
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

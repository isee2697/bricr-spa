export type DmsFolderIconType = 'primary' | 'secondary';

export type DmsFolderIconProps = {
  id: string;
  name: string;
  type?: DmsFolderIconType;
  childCount?: number;
  isOpened?: boolean;
  isAdd?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  onRemove?: VoidFunction;
  onRename?: (name: string) => void;
};

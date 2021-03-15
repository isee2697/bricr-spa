export type IconType = 'primary' | 'secondary';

export type FolderContainerProps = {
  id: string;
  name: string;
  type?: IconType;
  childCount?: number;
  isOpened?: boolean;
  isAdd?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  onRemove?: VoidFunction;
  onRename?: (name: string) => void;
};

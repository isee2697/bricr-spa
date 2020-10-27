export type DmsFolderIconType = 'primary' | 'secondary';

export type DmsFolderIconProps = {
  name: string;
  type?: DmsFolderIconType;
  childCount: number;
  isOpened?: boolean;
  onClick?: (e: React.MouseEvent) => void;
};

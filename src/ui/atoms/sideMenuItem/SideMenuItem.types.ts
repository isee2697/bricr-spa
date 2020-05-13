export type SideMenuItemProps = {
  icon?: React.ReactNode;
  title: string;
  selected: boolean;
  onClick?: () => void;
  children?: React.ReactNodeArray;
  className?: string;
};

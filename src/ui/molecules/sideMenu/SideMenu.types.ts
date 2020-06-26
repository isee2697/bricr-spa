import { ListProps } from '@material-ui/core';

export type SideMenuProps = ListProps & {
  children: React.ReactNodeArray;
  className?: string;
};

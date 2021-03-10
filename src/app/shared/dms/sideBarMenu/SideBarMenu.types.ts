import { ReactNode } from 'react';

export type DmsDetailsSideBarMenuProps = {
  onHide: () => void;
  isVisible: boolean;
  type: string;
  configureItems?: ReactNode;
};

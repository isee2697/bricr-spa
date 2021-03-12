import { ReactNode } from 'react';

export type DmsDetailsSideBarMenuProps = {
  onHide: () => void;
  isVisible: boolean;
  configureItems?: ReactNode;
};

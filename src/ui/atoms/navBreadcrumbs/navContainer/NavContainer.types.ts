import { ReactElement } from 'react';

export type CollapsedItems = {
  display: ReactElement[];
  collapsed: ReactElement[];
};

export type NavContainerProps = {
  children: ReactElement[];
  limit: number;
};

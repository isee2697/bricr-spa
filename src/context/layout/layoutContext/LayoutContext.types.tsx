import { Dispatch } from 'react';
import { LayoutAction } from '../layoutReducer/layoutReducer.types';

export type LayoutStateContextType = {
  isHeaderVisible: boolean;
  isSidebarVisible: boolean;
  isSidebarMenuVisible: boolean;
};

export type LayoutDispatchContextType = Dispatch<LayoutAction>;

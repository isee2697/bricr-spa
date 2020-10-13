import React, { useReducer } from 'react';
import { LayoutDispatchContext, LayoutStateContext } from '../layoutContext/LayoutContext';
import { layoutReducer } from '../layoutReducer/layoutReducer';

import { LayoutContextControllerProps } from './LayoutContextController.types';

export const LayoutContextController = ({ children }: LayoutContextControllerProps) => {
  const [state, dispatch] = useReducer(layoutReducer, {
    isHeaderVisible: true,
    isSidebarVisible: true,
    isSidebarMenuVisible: true,
  });

  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>{children}</LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
};

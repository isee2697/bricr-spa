import { useCallback, useContext } from 'react';

import { LayoutDispatchContext, LayoutStateContext } from '../layoutContext/LayoutContext';
import { setFullscreen, setSidebarMenuVisible } from '../layoutActionCreators/layoutActionCreators';

import { useLayoutType } from './useLayout.types';

export const useLayout = (): useLayoutType => {
  const state = useContext(LayoutStateContext);
  const dispatch = useContext(LayoutDispatchContext);

  if (state === undefined) {
    throw new Error('LayoutStateContext is unavailable, make sure you are using LayoutStateContext');
  }

  if (dispatch === undefined) {
    throw new Error('LayoutDispatchContext is unavailable, make sure you are using LayoutDispatchContext');
  }

  return {
    ...state,
    setSidebarMenuVisible: useCallback(isVisible => dispatch(setSidebarMenuVisible(isVisible)), [dispatch]),
    setFullscreen: useCallback(isVisible => dispatch(setFullscreen(isVisible)), [dispatch]),
  };
};

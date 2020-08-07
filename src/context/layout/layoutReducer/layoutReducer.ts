import { LayoutStateContextType } from '../layoutContext/LayoutContext.types';

import { LayoutAction } from './layoutReducer.types';

export const SET_SIDEBAR_VISIBLE = 'layout/set-sidebar-open';
export const SET_SIDEBAR_MENU_VISIBLE = 'layout/set-sidebar-menu-open';
export const SET_HEADER_VISIBLE = 'layout/set-sidebar-header-open';
export const SET_FULLSCREEN = 'layout/set-fullscreen';

export const layoutReducer: (state: LayoutStateContextType, action: LayoutAction) => LayoutStateContextType = (
  state,
  action,
) => {
  const behaviours: Record<string, (state: LayoutStateContextType, action: LayoutAction) => LayoutStateContextType> = {
    [SET_SIDEBAR_VISIBLE]: state => ({
      ...state,
      isSidebarVisible: action.isVisible,
    }),
    [SET_SIDEBAR_MENU_VISIBLE]: state => ({
      ...state,
      isSidebarMenuVisible: action.isVisible,
    }),
    [SET_HEADER_VISIBLE]: state => ({
      ...state,
      isHeaderVisible: action.isVisible,
    }),
    [SET_FULLSCREEN]: state => ({
      ...state,
      isSidebarVisible: !action.isVisible,
      isSidebarMenuVisible: !action.isVisible,
      isHeaderVisible: !action.isVisible,
    }),
  };

  if (!behaviours[action.type]) {
    throw new Error(`Unhandled action type: ${action.type}`);
  }

  return behaviours[action.type](state, action);
};

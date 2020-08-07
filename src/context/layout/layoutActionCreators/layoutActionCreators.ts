import { LayoutAction } from '../layoutReducer/layoutReducer.types';
import {
  SET_FULLSCREEN,
  SET_HEADER_VISIBLE,
  SET_SIDEBAR_MENU_VISIBLE,
  SET_SIDEBAR_VISIBLE,
} from '../layoutReducer/layoutReducer';

export const setSidebarMenuVisible: (isVisible: boolean) => LayoutAction = isVisible => ({
  type: SET_SIDEBAR_MENU_VISIBLE,
  isVisible,
});

export const setSidebarVisible: (isVisible: boolean) => LayoutAction = isVisible => ({
  type: SET_SIDEBAR_VISIBLE,
  isVisible,
});

export const setHeaderVisible: (isVisible: boolean) => LayoutAction = isVisible => ({
  type: SET_HEADER_VISIBLE,
  isVisible,
});

export const setFullscreen: (isVisible: boolean) => LayoutAction = isVisible => ({
  type: SET_FULLSCREEN,
  isVisible,
});

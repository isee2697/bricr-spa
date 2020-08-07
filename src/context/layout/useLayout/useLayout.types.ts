import { LayoutStateContextType } from '../layoutContext/LayoutContext.types';

export type useLayoutType = LayoutStateContextType & {
  setSidebarMenuVisible: (isVisible: boolean) => void;
  setFullscreen: (isVisible: boolean) => void;
};

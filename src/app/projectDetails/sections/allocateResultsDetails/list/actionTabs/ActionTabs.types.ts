import { AllocatedResultCountInfo } from '../List.types';

export type ActionTabsProps = {
  tabIndex: number;
  onTabChange: (tab: number) => void;
  countInfo: AllocatedResultCountInfo;
};

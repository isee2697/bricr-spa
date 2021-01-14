import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';

export type CheckListViewTabsProps = {
  status: ActionTabStatus;
  onStatusChange: (status: ActionTabStatus) => void;
  amounts?: {
    actionRequired: number;
    active: number;
    archived: number;
  };
};

import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';

export type CrmActionTabsProps = {
  status: ActionTabStatus;
  onStatusChange: (status: ActionTabStatus) => void;
  amounts?: {
    actionRequired: number;
    active: number;
    inactive: number;
  };
};

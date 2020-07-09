export type ActionTabStatus = 'actionRequired' | 'active' | 'archived';

export type ActionTabsProps = {
  status: ActionTabStatus;
  onStatusChange: (type: ActionTabStatus) => void;
  amounts?: {
    actionRequired: number;
    active: number;
    archived: number;
  };
};

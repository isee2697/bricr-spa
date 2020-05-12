export type PimTabsStatus = 'actionRequired' | 'active' | 'archived';

export type PimTabsProps = {
  status: PimTabsStatus;
  onStatusChange: (type: PimTabsStatus) => void;
  amounts?: {
    actionRequired: number;
    active: number;
    archived: number;
  };
};

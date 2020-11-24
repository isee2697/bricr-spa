export type SalesAcquisitionTabsProps = {
  status: 'actionRequired' | 'active' | 'withdrawn';
  onStatusChange: (status: 'actionRequired' | 'active' | 'withdrawn') => void;
  amounts: {
    actionRequired: number;
    active: number;
    withdrawn: number;
  };
};

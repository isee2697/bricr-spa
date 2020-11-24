export type SalesLeadsTabsProps = {
  status: 'actionRequired' | 'withdrawn';
  onStatusChange: (status: 'actionRequired' | 'withdrawn') => void;
  amounts: {
    actionRequired: number;
    withdrawn: number;
  };
};

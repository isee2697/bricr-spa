export type ContractTemplatesTabsProps = {
  status: 'active' | 'inactive';
  onStatusChange: (status: 'active' | 'inactive') => void;
  amounts: {
    active: number;
    inactive: number;
  };
};

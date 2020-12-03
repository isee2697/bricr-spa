import { SalesStatus } from 'api/types';

export type SalesAcquisitionTabsProps = {
  status: SalesStatus;
  onStatusChange: (status: SalesStatus) => void;
  amounts: {
    actionRequired: number;
    active: number;
    withdrawn: number;
  };
};

import { CrmStatus } from 'api/types';

export type CrmActionTabsProps = {
  status: CrmStatus;
  onStatusChange: (status: CrmStatus) => void;
  amounts?: {
    actionRequired: number;
    active: number;
    inactive: number;
  };
};

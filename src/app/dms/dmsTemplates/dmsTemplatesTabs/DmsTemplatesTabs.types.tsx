import { ActiveTabStatus } from '../DmsTemplates.types';

export type DmsTemplatesTabsProps = {
  status: ActiveTabStatus;
  onStatusChange: (status: ActiveTabStatus) => void;
  amounts?: {
    active: number;
    inactive: number;
  };
};

import { TeamRight } from 'api/types';

export type DmsFolderTabsProps = {
  status: TeamRight;
  onStatusChange: (status: TeamRight) => void;
};

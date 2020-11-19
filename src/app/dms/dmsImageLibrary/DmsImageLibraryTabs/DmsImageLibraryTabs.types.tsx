import { ActiveTabStatus } from '../DmsImages.types';

export type DmsImageLibraryTabsProps = {
  status: ActiveTabStatus;
  onStatusChange: (status: ActiveTabStatus) => void;
  amounts?: {
    active: number;
    inactive: number;
  };
};

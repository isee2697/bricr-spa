import { Profile } from 'api/types';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';

export type CrmProps = {
  type: CrmType;
  status: ActionTabStatus;
  onTypeChange: (type: CrmType) => void;
  onStatusChange: (status: ActionTabStatus) => void;
};

export enum CrmType {
  Relations = 'relations',
  Businesses = 'businesses',
}

export type CrmItem = {
  status: ActionTabStatus;
  name: string;
  id: string;
  email: string;
  avatar?: string;
  property: string;
  partner: Profile;
  manager: Profile;
  informationCompletedStatus: number;
  meta: {
    matches: number;
    interests: number;
    viewings: number;
    biddings: number;
    candidate: number;
    optant: number;
  };
};

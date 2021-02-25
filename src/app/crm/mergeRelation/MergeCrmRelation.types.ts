import { DateTime } from 'luxon';

import { CrmAddress } from 'api/types';
import { CrmItem } from '../Crm.types';
import { MatchProfile } from 'app/crmBusinessesDetails/matchProfile/MatchProfile.types';

export type ObjectType = {
  crm: CrmDetailItem;
  matches: CrmDetailItem[];
};

export type DataFieldType =
  | 'firstName'
  | 'lastName'
  | 'initials'
  | 'gender'
  | 'street'
  | 'houseNumber'
  | 'addition'
  | 'zipcode'
  | 'city'
  | 'phoneNumber'
  | 'email'
  | 'partner';

export type MatchProfileType = {
  id: string;
  crmId?: number;
};

export type ResultType = {
  crm: CrmDetailItem;
  matches: CrmDetailItem[];
  selectedManager?: number;
  selectedFields?: {
    [key in DataFieldType]?: number;
  };
  matchProfiles?: MatchProfileType[];
};

export type MergeDataStepProps = {
  onNext: () => void;
  onPrev: () => void;
  onUpdate: (data: ResultType) => void;
  objects: ObjectType;
  results: ResultType;
};

export type CrmDetailItem = CrmItem & {
  createdAt: DateTime;
  address?: CrmAddress;
  matchedPercent?: number;
  matchProfiles?: MatchProfile[];
  isDelete?: boolean;
};

export type MergeCrmRelationContainerProps = {
  onSidebarOpen: () => void;
  isSidebarVisible: boolean;
};

export type MergeCrmRelationProps = {
  onSubmit: (results: ObjectType) => void;
  onSidebarOpen: () => void;
  isSidebarVisible: boolean;
  crm: CrmDetailItem;
  matches: CrmDetailItem[];
};
